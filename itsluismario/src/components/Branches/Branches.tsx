import React from 'react';
import Link from 'next/link';

interface Branch {
    title: string;
    subtitle: string;
    url: string;
}

const Branches = (props:Branch ) => {

    const { title, subtitle, url } = props
    return (
            <Link legacyBehavior href={url}>
            <a className="group rounded-lg border border-transparent px-5 py-4 mb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30" rel="noopener noreferrer">
                <h2 className="mb-3 text-2xl font-semibold">
                {title}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{subtitle}</p>
            </a>
            </Link>
        )
        

    };

export default Branches;
