import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Plus, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { company, services, faqs } from '@/lib/content';
import { isProductionSite, siteUrl } from '@/lib/seo';

export default function Home() {
 const businessId = isProductionSite ? `${siteUrl}/#empresa` : '#empresa';
 const schema = { '@context':'https://schema.org', '@graph': [
  { '@type':'LocalBusiness', '@id':businessId, name:company.name, telephone:'+5541998366785', areaServed:['Curitiba','Região Metropolitana de Curitiba'], openingHours:'Mo-Su 00:00-23:59', ...(isProductionSite?{url:siteUrl,image:`${siteUrl}/images/about.jpg`}:{}) },
  ...services.map(s=>({'@type':'Service',name:s.title,serviceType:s.title,provider:{'@id':businessId},areaServed:['Curitiba','Região Metropolitana de Curitiba']})),
 ] };
 return <>
 <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
 <Header />
 <main id="conteudo">
 <section id="inicio" className="hero" aria-labelledby="hero-title">
  <div className="hero-inner container"><div className="hero-panel"><div className="hero-copy"><p className="eyebrow"><Clock3 size={16} aria-hidden="true"/>Atendimento 24 horas em Curitiba</p>
   <h1 id="hero-title">Desentupidora em Curitiba com <span>Atendimento 24 Horas</span></h1>
   <p className="hero-description">Desentupimento de pias, vasos sanitários, ralos e esgotos em Curitiba e Região Metropolitana. Atendimento residencial, comercial e industrial.</p>
   <WhatsAppButton placement="hero" />
   <a className="hero-explore" href="#servicos">Conheça nossos serviços <ArrowDown size={16} aria-hidden="true"/></a>
  </div></div><div className="hero-photo"><Image src="/images/hero-lava-loica.png" alt="Profissional da DAREGIÃO usando uma chave para reparar o sifão sob uma pia" width={1536} height={1024} sizes="(max-width: 767px) calc(100vw - 48px), 52vw" priority/><span aria-hidden="true" className="photo-edge"/></div>
  </div>
 </section>

 <section id="servicos" className="section services-section" aria-labelledby="services-title"><div className="container">
  <div className="section-heading"><div><p className="eyebrow">O que fazemos</p><h2 id="services-title">Serviços de Desentupimento em Curitiba</h2></div><p>Do ralo ao esgoto, encontre o serviço para o seu imóvel e converse com a nossa equipe.</p></div>
  <div className="services-grid">{services.map((s,i)=><article className="service-card" key={s.slug}><span className="service-number">0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p><a href={`#${s.slug}`} className="service-link">Sobre o serviço<span className="sr-only"> de {s.title.toLowerCase()}</span><ArrowUpRight size={20} aria-hidden="true"/></a></article>)}</div>
 </div></section>

 <section id="sobre" className="section container about-grid" aria-labelledby="about-title">
  <figure className="about-figure"><Image src="/images/about.jpg" alt="Caminhão da Desentupidora da Região com tanque e mangueiras de serviço" width={598} height={382} sizes="(max-width: 767px) calc(100vw - 48px), 46vw"/><figcaption>Equipamento da empresa, em fotografia do site original.</figcaption></figure>
  <div className="about-copy"><p className="eyebrow">A empresa</p><h2 id="about-title">Conheça a Desentupidora da Região</h2><p>A DAREGIÃƒO realiza serviços de desentupimento em Curitiba e Região Metropolitana, atendendo residências, comércios, indústrias e edifícios.</p><p>De pias e ralos à limpeza de caixas de gordura e ao hidrojateamento, a equipe atende diferentes necessidades do seu imóvel.</p><a href="#contato" className="text-link">Converse com a nossa equipe <ArrowUpRight size={18} aria-hidden="true"/></a></div>
 </section>

 <section id="regioes" className="region-section" aria-labelledby="region-title"><div className="container region-grid"><div className="region-copy"><p className="eyebrow">Perto de você</p><h2 id="region-title">Desentupidora em Curitiba e Região Metropolitana</h2><p>Atendemos todos os bairros de Curitiba e a Região Metropolitana.</p><p className="muted">Informe seu bairro ou município pelo WhatsApp para combinar o atendimento no seu endereço.</p><a href="#contato" className="text-link">Consultar atendimento na minha região <ArrowUpRight size={18} aria-hidden="true"/></a></div>
 <figure className="region-map" aria-label="Mapa fictício para demonstração visual, sem localização real da empresa">
  <div className="region-map-canvas">
   <svg viewBox="0 0 600 400" fill="none" aria-hidden="true" className="region-map-art" preserveAspectRatio="xMidYMid slice">
    <defs><pattern id="map-blocks" width="92" height="76" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)"><rect width="92" height="76" fill="#e9eeea"/><rect x="7" y="7" width="78" height="62" rx="5" fill="#dde3df"/><path d="M0 0H92M0 0V76" stroke="#fff" strokeWidth="7"/></pattern></defs>
    <path fill="url(#map-blocks)" d="M0 0h600v400H0z"/>
    <path d="M425-20C350 80 505 130 425 230S450 360 375 430" stroke="#b8dce9" strokeWidth="27"/>
    <path d="m22 46 114-28 42 68-99 40-57-80Zm410 219 106-39 49 89-108 55-47-105Z" fill="#c2d8bc"/>
    <path d="M-30 335 630 80M110-30 318 430M-20 140 620 260" stroke="#d2d5ce" strokeWidth="22"/>
    <path d="M-30 335 630 80M110-30 318 430M-20 140 620 260" stroke="#fff" strokeWidth="16"/>
    <path d="M-20 365C155 288 360 315 620 355" stroke="#e6d7ab" strokeWidth="14"/>
    <path d="M-20 365C155 288 360 315 620 355" stroke="#fff3cc" strokeWidth="9"/>
    <circle cx="300" cy="190" r="115" fill="#1c4ec4" fillOpacity=".07" stroke="#3566bd" strokeOpacity=".45" strokeDasharray="6 7"/>
   </svg>
   <span className="region-map-badge">Prévia de localização</span>
   <div className="region-map-marker"><span><MapPin size={30} aria-hidden="true"/></span><strong>DAREGIÃO</strong><small>Curitiba e região</small></div>
   <span className="region-map-key"><span/> Região de atendimento ilustrativa</span>
  </div><figcaption>Mapa ilustrativo · Localização fictícia para demonstração.</figcaption>
 </figure></div></section>

 <section className="section container" aria-labelledby="steps-title"><div className="section-heading"><div><p className="eyebrow">Sem complicação</p><h2 id="steps-title">Como solicitar atendimento</h2></div><p>Uma conversa é o primeiro passo.</p></div><ol className="steps-grid">{[['Entre em contato pelo WhatsApp.','Use o botão do site para iniciar a conversa.'],['Explique o problema e solicite um orçamento.','Conte o que aconteceu e informe a localização do imóvel.'],['Combine os próximos passos com a equipe.','Alinhe os detalhes do serviço diretamente no atendimento.']].map(([title,text],i)=><li key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

 <section className="section faq-section" aria-labelledby="faq-title"><div className="container faq-grid"><div><p className="eyebrow">Tire suas dúvidas</p><h2 id="faq-title">Perguntas frequentes</h2><p>Informações para ajudar você a solicitar o atendimento.</p></div><div>{faqs.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<Plus size={20} aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>

 <section className="section container service-details" aria-labelledby="details-title"><div className="section-heading"><div><p className="eyebrow">Antes de chamar</p><h2 id="details-title">Conte o que está acontecendo</h2></div><p>Veja quais informações compartilhar ao solicitar seu serviço.</p></div><div className="details-grid">{services.map(s=><details id={s.slug} key={s.slug} className="faq-item"><summary>{s.title}<Plus size={20} aria-hidden="true"/></summary><p>{s.detail}</p><a href="#contato" className="text-link">Solicitar atendimento <ArrowRight size={16} aria-hidden="true"/></a></details>)}</div></section>

 <section id="contato" className="final-cta" aria-labelledby="contact-title"><div className="container final-inner"><div><p className="eyebrow">Pode chamar a DAREGIÃƒO</p><h2 id="contact-title">Precisa de um serviço de desentupimento?</h2><p>Explique o problema e solicite seu orçamento diretamente à equipe.</p></div><div className="final-action"><WhatsAppButton placement="final">Falar com a equipe pelo WhatsApp</WhatsAppButton><span>{company.phone} Â· Atendimento 24 horas</span></div></div></section>
 </main>
 <footer className="container footer"><div className="footer-top"><Image src="/images/logo.png" alt="Desentupidora DAREGIÃƒO" width={537} height={153} className="logo"/><p>Curitiba e Região Metropolitana.<br/>Residencial, comercial e industrial.</p><div><a href="tel:+5541998366785">{company.phone}</a><a href="tel:+554132522314">{company.landline}</a></div></div><div className="footer-bottom"><span>Â© {new Date().getFullYear()} Desentupidora da Região</span>{!isProductionSite&&<span>Demonstração de redesign Â· Não é o site oficial</span>}<a href="#inicio">Voltar ao início â†‘</a></div></footer>
 <div className="mobile-cta"><WhatsAppButton placement="mobile_fixed">Solicitar orçamento</WhatsAppButton></div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
 </>;
}

