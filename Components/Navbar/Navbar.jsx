import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav>
        <Link href="/PostListing">Posts</Link>
        <Link href="/favouritePosts">Favourite</Link>
       </nav>
    );
};

export default Navbar;