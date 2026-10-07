import { useMemo, useState } from 'react';
import { Activity, Bot, CheckCircle2, Code2,  ShieldCheck, TimerReset } from 'lucide-react';

type Task = { id:string; title:string; language:string; difficulty:string; category:string; description:string; tests:number; hiddenTests:number };
const tasks: Task[] = [
  {id:'AUTH-101',title:'Refresh Token Race Condition',language:'Python',difficulty:'Hard',category:'Authentication',description:'Diagnose intermittent 401 responses during concurrent refresh token rotation.',tests:12,hiddenTests:8},
  {id:'API-203',title:'Idempotent Order Endpoint',language:'TypeScript',difficulty:'Medium',category:'API Design',description:'Prevent duplicate writes when clients retry a timed out POST request.',tests:10,hiddenTests:6},
  {id:'DB-307',title:'Slow Tenant Dashboard',language:'SQL',difficulty:'Hard',category:'Performance',description:'Reduce a multi-tenant analytics query from seconds to subsecond response time.',tests:9,hiddenTests:5},
  {id:'SEC-411',title:'Broken Object Authorization',language:'Java',difficulty:'Hard',category:'Security',description:'Fix an ownership check that leaks records across organizations.',tests:14,hiddenTests:10},
  {id:'UI-118',title:'Duplicate Fetch Loop',language:'TypeScript',difficulty:'Medium',category:'Frontend',description:'Stop repeated network requests caused by unstable React effect dependencies.',tests:8,hiddenTests:4},
  {id:'OPS-502',title:'Container Health Failure',language:'Python',difficulty:'Medium',category:'DevOps',description:'Repair a service whose health probe fails after a configuration change.',tests:7,hiddenTests:5}
];
const runs = [
  {model:'Frontier Agent A',pass:86,security:93,quality:88,regressions:2,time:'04:18'},
  {model:'Frontier Agent B',pass:79,security:84,quality:91,regressions:4,time:'03:42'},
  {model:'Baseline Agent',pass:61,security:68,quality:72,regressions:8,time:'02:55'}
];

export default function App(){
  const [filter,setFilter]=useState('All');
  const [selected,setSelected]=useState(tasks[0]);
  const categories=['All',...Array.from(new Set(tasks.map(t=>t.category)))];
  const visible=useMemo(()=>filter==='All'?tasks:tasks.filter(t=>t.category===filter),[filter]);
  return <main className="shell">
    <nav><div className="brand"><Bot size={22}/><span>AgentBench SWE</span></div><a href="https://github.com/yeabsira-mesfin/WeatherForecast" target="_blank" rel="noreferrer">GitHub</a></nav>
    <section className="hero">
      <div><span className="eyebrow">AI SOFTWARE ENGINEERING EVALUATION</span><h1>Measure whether coding agents can solve real engineering work.</h1><p>Production-style tasks, hidden tests, security checks, regression detection, and rubric-based scoring in one benchmark dashboard.</p><div className="heroActions"><button onClick={()=>document.getElementById('tasks')?.scrollIntoView({behavior:'smooth'})}>Explore benchmark</button><span><CheckCircle2 size={17}/> Reproducible scoring</span></div></div>
      <div className="scoreCard"><span>Benchmark readiness</span><strong>24</strong><small>evaluation dimensions across six task families</small><div className="bar"><i style={{width:'88%'}}/></div><div className="mini"><div><b>94%</b><span>test determinism</span></div><div><b>6</b><span>task families</span></div><div><b>38</b><span>hidden tests</span></div></div></div>
    </section>
    <section className="stats">
      <div><Code2/><b>{tasks.length}</b><span>benchmark tasks</span></div><div><ShieldCheck/><b>Security</b><span>explicit scoring dimension</span></div><div><TimerReset/><b>CI ready</b><span>repeatable evaluation runs</span></div><div><Activity/><b>0-100</b><span>weighted rubric score</span></div>
    </section>
    <section id="tasks" className="panel"><div className="sectionHead"><div><span className="eyebrow">TASK LIBRARY</span><h2>Engineering scenarios</h2></div><div className="filters">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div></div>
      <div className="taskLayout"><div className="taskList">{visible.map(t=><button key={t.id} onClick={()=>setSelected(t)} className={`task ${selected.id===t.id?'selected':''}`}><span className="taskTop"><b>{t.id}</b><em>{t.difficulty}</em></span><strong>{t.title}</strong><small>{t.language} · {t.category}</small></button>)}</div><article className="detail"><span className="eyebrow">SELECTED TASK</span><h3>{selected.title}</h3><p>{selected.description}</p><div className="detailGrid"><div><span>Language</span><b>{selected.language}</b></div><div><span>Difficulty</span><b>{selected.difficulty}</b></div><div><span>Visible tests</span><b>{selected.tests}</b></div><div><span>Hidden tests</span><b>{selected.hiddenTests}</b></div></div><div className="rubric"><span>Scoring rubric</span><p>Correctness 40 · Security 20 · Tests 15 · Maintainability 15 · Documentation 10</p></div></article></div>
    </section>
    <section className="panel"><div className="sectionHead"><div><span className="eyebrow">MODEL COMPARISON</span><h2>Evaluation runs</h2></div><span className="muted">Sample benchmark results</span></div><div className="table"><div className="row header"><span>Model</span><span>Pass rate</span><span>Security</span><span>Quality</span><span>Regressions</span><span>Runtime</span></div>{runs.map(r=><div className="row" key={r.model}><strong>{r.model}</strong><span>{r.pass}%</span><span>{r.security}</span><span>{r.quality}</span><span>{r.regressions}</span><span>{r.time}</span></div>)}</div></section>
    <footer><span>Built to demonstrate benchmark design, code evaluation, secure software engineering, and reproducible testing.</span></footer>
  </main>
}
