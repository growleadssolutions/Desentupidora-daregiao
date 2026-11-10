'use client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { WhatsAppButton } from './whatsapp-button';
const links = [['Início', '#inicio'], ['Serviços', '#servicos'], ['Sobre', '#sobre'], ['Regiões atendidas', '#regioes'], ['Contato', '#contato']];
export function Header() {
 const [open, setOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 return <header className="site-header" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}}}>
 <div className="container header-inner"><a href="#inicio" aria-label="Desentupidora da Região — início"><Image src="/images/logo.png" alt="Desentupidora DAREGIÃO" width={537} height={153} className="logo" priority /></a>
 <nav aria-label="Navegação principal" className="desktop-nav">{links.map(([label, href])=><a key={href} href={href}>{label}</a>)}</nav><WhatsAppButton placement="header" className="header-cta">Fale pelo WhatsApp</WhatsAppButton>
 <button ref={toggle} className="menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button></div>
 <nav id="mobile-nav" aria-label="Navegação mobile" hidden={!open} className="mobile-nav">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
 </header>;
}
