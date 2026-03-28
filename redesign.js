const fs = require('fs');
const file = 'c:/Users/KRRISH/Design Thinking/Finestro/Finestro Website Prototype - Copy/src/components/DashboardPage.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/bg-white p-10/g, 'bg-white p-6 shadow-md rounded-2xl border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-200');
txt = txt.replace(/text-\[10px\] font-black text-slate-600 uppercase tracking-widest/g, 'text-sm text-gray-500 font-medium');
txt = txt.replace(/text-3xl font-black tracking-tight text-slate-900 mb-1/g, 'text-2xl md:text-3xl font-bold text-slate-900 mb-2');

txt = txt.replace(/<TabsList className="[^"]*">/g, '<TabsList className="bg-gray-100 rounded-full p-1.5 flex gap-1 sm:gap-2 h-auto justify-start border-none overflow-x-auto w-full md:w-auto">');
txt = txt.replace(/className="flex items-center gap-2 px-6 py-3 rounded-2xl data-\[state=active\]:bg-blue-600 data-\[state=active\]:text-white data-\[state=active\]:shadow-lg transition-all font-bold text-slate-600 text-sm hover:bg-slate-50"/g, 'className="flex items-center gap-2 px-5 py-2.5 rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm transition-all font-medium text-gray-600 text-sm hover:bg-gray-200/50"');

txt = txt.replace(/shadow-ambient-lg/g, 'shadow-lg');
txt = txt.replace(/pl-14 rounded-2xl h-14/g, 'pl-12 rounded-full h-12 flex-1');
txt = txt.replace(/py-6 pl-10/g, 'py-4 pl-6');
txt = txt.replace(/pr-10/g, 'pr-6');
txt = txt.replace(/text-lg group-hover:text-blue-600/g, 'text-base font-semibold group-hover:text-blue-600');
txt = txt.replace(/hover:bg-slate-50\/80 border-b border-slate-50/g, 'hover:bg-gray-50 border-b border-gray-100');

fs.writeFileSync(file, txt);
console.log("Dashboard UI redesigned");
