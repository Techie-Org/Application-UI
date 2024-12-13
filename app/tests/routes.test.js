import {
  componentHelper,
  reducerHelper,
  sagaHelper,
  routes,
  enabledRoutes,
} from '../routes';

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

describe('hasDuplicates', () => {
  it('does not have duplicates', () => {
    expect(hasDuplicates(['one', 'one'])).toBe(true);
  });
  it('does not have duplicates', () => {
    expect(hasDuplicates(['one', 'two'])).toBe(false);
  });
});

describe('routes', () => {
  Object.entries(routes).forEach(([routekey, route]) => {
    const { reducers, sagas, name } = route;
    describe(`route "${routekey}"`, () => {
      it('has defined component', () => {
        expect(componentHelper[name]).toBeDefined();
      });
      it('does not have duplicate reducers', () => {
        expect(hasDuplicates(reducers)).toBe(false);
      });
      it('does not have duplicate sagas', () => {
        expect(hasDuplicates(sagas)).toBe(false);
      });

      reducers.forEach((reducer) => {
        describe(`reducer "${reducer}"`, () => {
          it('is defined', () => {
            expect(reducerHelper[reducer]).toBeDefined();
          });
        });
      });
      sagas.forEach((saga) => {
        describe(`saga "${saga}"`, () => {
          it('is defined', () => {
            expect(sagaHelper[saga]).toBeDefined();
          });
        });
      });
    });
    describe('enabledRoutes', () => {
      enabledRoutes.forEach((routeName) => {
        describe(`enabled route: ${routeName}`, () => {
          it('should be defined in routes', () => {
            expect(routes[routeName]).toBeDefined();
          });
        });
      });
    });
  });
});
