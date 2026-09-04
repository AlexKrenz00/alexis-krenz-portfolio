const wa="https://wa.me/541151078475?text=Hola%20Alexis%2C%20quiero%20consultarte%20por%20una%20p%C3%A1gina%20web";
const jobs=[
 {name:"Danna · XV años",type:"Invitación digital",url:"https://invitacion-danna.vercel.app/",tone:"purple"},
 {name:"Lilian · XV años",type:"Invitación digital",url:"https://invitacion-xv-lilian-flame.vercel.app/",tone:"coral"},
 {name:"Thompson Medical",type:"Sistema de gestión clínica",url:"#",tone:"green"}
];
export default function Home(){return <main>
 <nav className="shell"><a className="logo" href="#"><b>AK</b>Alexis Krenz</a><div><a href="#proyectos">Proyectos</a><a href="#servicios">Servicios</a><a className="pill" href={wa}>Hablemos</a></div></nav>
 <header className="shell"><section><span className="available">● DISPONIBLE PARA PROYECTOS</span><h1>Ideas personales,<br/><i>convertidas en web.</i></h1><p>Diseño y desarrollo experiencias digitales únicas: invitaciones para eventos, páginas para emprendimientos y soluciones web a medida.</p><div className="buttons"><a className="primary" href={wa}>Contame tu idea ↗</a><a href="#proyectos">Ver proyectos ↓</a></div><small>React　 JavaScript　 Vite　 Bootstrap　 Node.js</small></section><div className="mock"><div className="bar">● ● ●　 alexis.dev</div><article><em>ESTÁS INVITADO</em><strong>Tu momento<br/>merece algo único</strong><span>25 · 10 · 2026</span><button>CONFIRMAR ASISTENCIA</button></article><label>&lt;idea /&gt;<br/>→ experiencia digital</label></div></header>
 <section className="work shell" id="proyectos"><div className="title"><span>01</span><h2>Proyectos seleccionados</h2><p>Diseños reales, publicados y pensados para cualquier pantalla.</p></div><div className="grid">{jobs.map((j,i)=><a className={"card "+j.tone+(i===2?" wide":"")} href={j.url} target={j.url==="#"?undefined:"_blank"} rel="noreferrer" key={j.name}><div className="visual">{i<2?<div className="invite"><small>{i?"XV AÑOS":"MIS XV"}</small><strong>{i?"Lilian":"Danna"}</strong><span>Una noche inolvidable</span></div>:<div className="dash"><b>THOMPSON MEDICAL</b><i/><i/><i/><label>EN DESARROLLO</label></div>}</div><footer><div><small>{j.type}</small><h3>{j.name}</h3></div><b>↗</b></footer></a>)}</div></section>
 <section className="services" id="servicios"><div className="shell"><div className="title"><span>02</span><h2>Lo que puedo crear</h2><p>Una solución atractiva y adaptada a tu necesidad.</p></div><div className="serviceGrid">{[["Invitaciones digitales","XV años, bodas y cumpleaños con música, mapa, galería y confirmación."],["Webs para negocios","Landing pages, catálogos, menús y contacto directo por WhatsApp."],["Desarrollo a medida","Interfaces modernas y sistemas web sencillos para necesidades reales."]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
 <section className="steps shell"><span>03</span><h2>Tu proyecto, paso a paso.</h2><div>{[
  ["Definimos tu idea","Conversamos sobre tus objetivos, el estilo y todo lo que necesitás."],
  ["Diseño y desarrollo","Creo una propuesta personalizada y la ajustamos con tus contenidos."],
  ["Revisamos y lanzamos","Comprobamos juntos cada detalle y dejo tu sitio listo para compartir."]
 ].map((x,i)=><article key={x[0]}><b>{i+1}</b><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
 <section className="contact shell"><div><small>¿TENÉS UNA IDEA?</small><h2>Hagámosla realidad.</h2><p>Contame qué necesitás y te respondo con una propuesta clara, sin compromiso.</p></div><a href={wa}>Hablar por WhatsApp ↗</a></section>
 <footer className="bottom shell"><span>© 2026 Alexis Krenz</span><span>Diseño & Desarrollo Web · Argentina</span><a href="mailto:alexiskrenz28@gmail.com">alexiskrenz28@gmail.com</a></footer>
 </main>}
