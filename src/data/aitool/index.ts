import type { LocaleCode } from '../../i18n';
import type { ToolLocale } from './types';
import en from './en';
import ko from './ko';
import ja from './ja';
import zhCN from './zh-CN';
import es from './es';
import ptBR from './pt-BR';
import de from './de';
import fr from './fr';

export * from './types';
export const TOOL: Record<LocaleCode, ToolLocale> = { en, ko, ja, 'zh-CN': zhCN, es, 'pt-BR': ptBR, de, fr };
export const toolCopy = (code: LocaleCode): ToolLocale => TOOL[code] ?? en;

/** The preview sandbox (equipe-cloud platform/src/artifact/sandbox.js): pasted code runs there, never on equipe.im. */
export const SANDBOX_URL = 'https://sandbox.equipe.im/preview';
export const SANDBOX_ORIGIN = 'https://sandbox.equipe.im';

/** A small sample (React, shadcn/ui Card, lucide icons, window.storage) for people who have no code at hand yet. */
export const SAMPLE = `import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Plus, RotateCcw } from "lucide-react";

export default function CoffeeCounter() {
  const [cups, setCups] = useState(0);
  useEffect(() => { window.storage?.get("cups").then((r) => r && setCups(Number(r.value) || 0)); }, []);
  const save = (n) => { setCups(n); window.storage?.set("cups", String(n)); };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="w-full max-w-sm rounded-2xl">
        <CardContent className="p-8 text-center space-y-6">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center"><Coffee /></div>
          <h1 className="text-2xl font-semibold">Coffee counter</h1>
          <p className="text-6xl font-bold tabular-nums">{cups}</p>
          <p className="text-gray-500">cups today</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => save(cups + 1)}><Plus className="w-4 h-4 mr-1" />One more</Button>
            <Button variant="outline" onClick={() => save(0)}><RotateCcw className="w-4 h-4" /></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
`;
