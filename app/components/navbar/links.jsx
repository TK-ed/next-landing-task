import Link from 'next/link'
export default function Links() {
    const links = [{
        title: 'Home',
        path: '/'
    }, {
        title: 'About',
        path: '/about'
    }, {
        title: 'Careers',
        path: '/careers'
    }, ]
    return(
        <>
            <div className="flex items-center justify-center w-full px-2 py-4 text-3xl xl:flex-row gap-x-14">
                {links.map((link)=><Link href={link.path} key={link.title}>{link.title}</Link>)}
            </div>
        </>
    ) 
}