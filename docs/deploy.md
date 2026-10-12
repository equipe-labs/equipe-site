# 배포: GitHub Pages + equipe.im

사이트는 `main`에 push(머지)될 때마다 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해 GitHub Pages에 배포한다.
PR에서는 같은 워크플로가 **빌드만** 돌려 깨진 변경을 막는다.

canonical 호스트는 **`https://equipe.im`** 하나다. `www.equipe.im`과 `equipe-labs.github.io/equipe-site`는 모두 여기로 리다이렉트된다.

아래 순서대로 하면 된다. 1~2단계는 DNS 없이 끝나고, 3단계부터 DNS가 필요하다.

---

## 1. 리포 Settings → Pages: 배포 소스를 Actions로 (사람)

1. `github.com/equipe-labs/equipe-site` → **Settings → Pages**
2. **Build and deployment → Source**: `GitHub Actions` 선택
3. 아직 **Custom domain은 비워 둔다** (2단계 확인 후 4단계에서 넣는다)

> `Settings → Environments → github-pages`가 첫 배포 때 자동으로 생긴다. 배포 브랜치 제한이 걸려 있다면 `main`이 허용돼 있어야 한다.

## 2. 첫 배포 확인 (DNS 연결 전)

1. 이 PR을 `main`에 머지한다 (또는 Actions 탭에서 `Deploy` 워크플로를 `Run workflow`로 수동 실행).
2. **Actions** 탭에서 `Deploy` 실행의 `build` → `deploy`가 초록색인지 본다.
3. `https://equipe-labs.github.io/equipe-site/` 에서 사이트가 뜨는지 확인한다.

커스텀 도메인이 없을 때 Pages는 `/equipe-site/` 하위 경로로 서비스하므로, 워크플로가 그 경로를 Astro `base`로 넘겨 빌드한다(`SITE_BASE`). 커스텀 도메인을 넣은 뒤에는 자동으로 루트(`/`)로 빌드된다.

## 3. (권장) 도메인 소유 확인 — 도메인 탈취 방지

다른 GitHub 계정이 `equipe.im`을 자기 Pages에 붙이지 못하게 막는다. DNS 레코드보다 먼저 하는 것을 권장한다.

1. **조직** `equipe-labs` → **Settings → Pages → Add a domain** → `equipe.im` 입력
2. GitHub가 보여주는 TXT 레코드를 DNS에 추가한다 (형태는 아래와 같고, **값은 화면에 나온 것을 그대로** 쓴다)

   | 타입 | 이름(호스트) | 값 |
   |---|---|---|
   | TXT | `_github-pages-challenge-equipe-labs` | GitHub가 준 값 |

3. 전파 후 **Verify** 클릭

## 4. DNS 레코드 (사람, 도메인 관리처에서)

`equipe.im` DNS 관리 화면에 아래 **9개 레코드**를 넣는다. apex(`@`)에 이미 있는 다른 A/AAAA/ALIAS 레코드(파킹 페이지 등)는 지운다. 관리처에 따라 이름 칸은 `@` 대신 비워 두거나 `equipe.im.`을 쓴다.

### apex `equipe.im` — A 4개

| 타입 | 이름 | 값 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### apex `equipe.im` — AAAA 4개 (IPv6)

| 타입 | 이름 | 값 |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

### `www.equipe.im` — CNAME 1개

| 타입 | 이름 | 값 |
|---|---|---|
| CNAME | `www` | `equipe-labs.github.io` |

- CNAME 값에는 리포 이름(`/equipe-site`)을 붙이지 않는다.
- TTL은 기본값(또는 3600)이면 된다.
- Cloudflare를 쓴다면 이 레코드들은 **DNS only(회색 구름)** 로 둔다. 프록시를 켜면 GitHub가 HTTPS 인증서를 발급하지 못한다.
- 와일드카드(`*.equipe.im`) 레코드는 만들지 않는다.

### 전파 확인

```sh
dig equipe.im A +short        # 185.199.108~111.153 네 개
dig equipe.im AAAA +short     # 2606:50c0:8000~8003::153 네 개
dig www.equipe.im CNAME +short # equipe-labs.github.io.
```

## 5. 리포 Settings → Pages: 커스텀 도메인 + HTTPS (사람)

1. **Settings → Pages → Custom domain**에 `equipe.im` 입력 → **Save**
   - **`www.equipe.im`이 아니라 `equipe.im`(apex)** 을 넣는다. 그래야 apex가 canonical이 되고, GitHub가 `www.equipe.im` → `equipe.im`을 자동으로 리다이렉트한다.
2. DNS check가 통과할 때까지 기다린다 (보통 몇 분, 길면 24시간).
3. 인증서가 발급되면 **Enforce HTTPS** 체크 (발급 전에는 비활성화돼 있다. 최대 1시간 정도 걸릴 수 있다).
4. 커스텀 도메인을 바꾼 뒤에는 base 경로가 바뀌므로 **Actions → Deploy → Run workflow**로 한 번 다시 배포한다.

> 커스텀 도메인은 Settings 값이 기준이다. `public/CNAME`(`equipe.im`)은 Actions 배포에서는 GitHub가 읽지 않지만, 도메인을 기록해 두는 용도와 혹시 브랜치 배포로 바꿀 때를 위해 둔다.

## 6. 최종 확인

```sh
curl -sI http://equipe.im          | grep -i -E '^(HTTP|location)'  # 301 → https://equipe.im/
curl -sI https://www.equipe.im     | grep -i -E '^(HTTP|location)'  # 301 → https://equipe.im/
curl -sI https://equipe.im         | head -1                         # HTTP/2 200
curl -s  https://equipe.im | grep canonical                          # href="https://equipe.im/"
```

`https://equipe-labs.github.io/equipe-site/`도 `https://equipe.im/`으로 리다이렉트되면 끝이다.

---

## 사람이 할 일 요약

- [ ] Settings → Pages → Source를 **GitHub Actions**로 (1단계)
- [ ] 머지 후 `https://equipe-labs.github.io/equipe-site/` 확인 (2단계)
- [ ] (권장) 조직 Settings → Pages에서 `equipe.im` 소유 확인 TXT 레코드 추가 + Verify (3단계)
- [ ] DNS: A 4개 + AAAA 4개(apex), `www` CNAME → `equipe-labs.github.io` (4단계)
- [ ] Settings → Pages → Custom domain `equipe.im` 저장, **Enforce HTTPS** 체크 (5단계)
- [ ] Deploy 워크플로 수동 재실행 후 6단계 curl로 확인
