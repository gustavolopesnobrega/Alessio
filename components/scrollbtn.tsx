'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Certifique-se de importar o ícone do Heroicons
import Link from 'next/link';


function ScrollToTopButton() {
    return (
        <Link href={'/'}
            className={`fixed bottom-4 right-4 p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-opacity duration-300'
                }`}

            aria-label="Scroll to top"
        >

            <AiOutlineArrowUp className="h-6 w-6" />
        </Link>
    );
};

export default ScrollToTopButton;