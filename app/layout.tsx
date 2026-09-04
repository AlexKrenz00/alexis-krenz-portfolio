import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Alexis Krenz · Diseño y Desarrollo Web",description:"Invitaciones digitales, páginas para negocios y desarrollo web personalizado."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><head><style>{`:root{--sans:Arial,Helvetica,sans-serif;--serif:Georgia,'Times New Roman',serif}`}</style></head><body>{children}</body></html>}
