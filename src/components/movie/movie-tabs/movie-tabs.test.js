import React from 'react';
import renderer from 'react-test-renderer';
import {MovieTabs} from '../movie-tabs/movie-tabs.jsx';
import {films} from '../../../mocks/mocks';

const comments = [
  {
    "id": 1,
    "user": {
      "id": 5,
      "name": `Kate Mur`
    },
    "rating": 8.9,
    "comment": `Two detectives, a rookie and a veteran, hunt a serial killer who uses`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

it(`MovieTabs render correctly`, () => {
  const tree = renderer.create((
    <MovieTabs
      movie={films[0]}
      comments={comments}
      isActive={`Overview`}
      onTabClick={()=>{}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
