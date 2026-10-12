// node --test 'scripts/*.test.mjs' (Node 24 runs the .ts import directly)
import test from 'node:test';
import assert from 'node:assert/strict';
import { channelOf } from '../src/analytics/channels.ts';

const c = (ref, utm = null, ai) => channelOf(ref, 'equipe.im', utm, ai);

test('channels', () => {
  assert.equal(c('', null, 'chatgpt'), 'ai');
  assert.equal(c(''), 'direct');
  assert.equal(c('https://equipe.im/ko/'), 'internal');
  assert.equal(c('https://github.com/equipe-labs/equipe'), 'github');
  assert.equal(c('https://www.google.co.kr/'), 'search');
  assert.equal(c('https://search.naver.com/search.naver'), 'search');
  assert.equal(c('https://www.bing.com/'), 'search');
  assert.equal(c('https://t.co/abc'), 'social');
  assert.equal(c('https://news.ycombinator.com/item?id=1'), 'social');
  assert.equal(c('https://old.reddit.com/r/x'), 'social');
  assert.equal(c('https://someblog.example/post'), 'referral');
  assert.equal(c('', 'twitter'), 'social');
  assert.equal(c('', 'github'), 'github');
  assert.equal(c('', 'newsletter'), 'referral');
  assert.equal(c('not a url'), 'direct');
  // "google" must not match hosts that merely contain the word.
  assert.equal(c('https://googleblog.example/'), 'referral');
});

test('languageSupported', async () => {
  const { languageSupported } = await import('../src/analytics/channels.ts');
  const locs = ['en', 'ko', 'ja', 'zh-CN', 'es', 'pt-BR', 'de', 'fr'];
  for (const l of ['en-US', 'ko', 'ko-KR', 'pt-PT', 'zh-CN', 'zh', 'zh-Hans-CN', 'fr-CA']) assert.equal(languageSupported(l, locs), true, l);
  for (const l of ['zh-TW', 'zh-HK', 'zh-Hant-TW', 'vi-VN', 'ru', 'id']) assert.equal(languageSupported(l, locs), false, l);
});
