import React from 'react';
import '../scss/pages/Library.scss';

import { AsideNav } from '../components/molecules';
import { LibraryResult, Player } from '../components/organisms';

export function Library() {
  return (
    <main className="artist-main">
      <AsideNav />
      <LibraryResult />
      <Player />
    </main>
  );
}
