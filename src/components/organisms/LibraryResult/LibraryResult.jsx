import React from 'react';

import './LibraryResult.scss';
import { TitleCategory } from '../../atoms';
import { LibraryItem } from '../../molecules';

export function LibraryResult() {
  return (
    <section className="artist_list">
      <TitleCategory />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
    </section>
  );
}
