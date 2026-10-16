"use client";
import {useState} from "react";

type ShowcaseProject={name:string;kind:string;accent:string;url?:string;image?:string};
const projects:ShowcaseProject[]=[
 {name:"Danna",kind:"Invitación XV",url:"https://invitacion-danna.vercel.app/",accent:"#a56bc1"},
 {name:"Lilian",kind:"Invitación XV",url:"https://invitacion-xv-lilian-flame.vercel.app/",accent:"#ef6572"},
 {name:"Thompson",kind:"Sistema web",url:"https://thompson-medical-system.vercel.app/",image:"/projects/thompson-home.png",accent:"#238c87"},
];

export default function ProjectShowcase(){
 const [active,setActive]=useState(0); const project=projects[active];
 return <div className="realShowcase" style={{"--project-accent":project.accent} as React.CSSProperties}>
  <div className="showcaseGlow"/>
  <div className="projectBrowser">
   <div className="projectBrowserBar"><span><i/><i/><i/></span><small>{project.url?.replace("https://","")??"vista-previa"}</small><b>{project.image?"DEMO PUBLICADA":"PROYECTO REAL"}</b></div>
   <div className="projectViewport">{project.image?<img src={project.image} alt={`Vista previa de ${project.name}`}/>:<iframe key={project.url} src={project.url} title={`Vista previa de ${project.name}`} loading="eager"/>}</div>
  </div>
  {project.url?<div className="projectPhone" aria-hidden="true"><div className="phoneSpeaker"/><iframe key={project.url+"-phone"} src={project.url} tabIndex={-1} loading="lazy" title="Vista móvil del proyecto"/></div>:null}
  <div className="projectSwitcher" aria-label="Seleccionar proyecto">
   <small>EXPLORÁ UN PROYECTO REAL</small><div>{projects.map((item,index)=><button className={index===active?"active":""} onClick={()=>setActive(index)} key={item.name} aria-pressed={index===active}><span>0{index+1}</span>{item.name}</button>)}</div>
   {project.url?<a href={project.url} target="_blank" rel="noreferrer">Ver experiencia completa <b>↗</b></a>:<a href="#proyectos">Ver caso de estudio <b>↓</b></a>}
  </div>
  <div className="realBadge"><span>DISEÑO</span><b>responsive</b><i>✦</i></div>
 </div>
}
