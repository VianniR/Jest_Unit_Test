// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});


test('Testing div -- success', () => {
    const expected = 6;
    const got = mut.div(18, 3);
    expect(got).toBe(expected);
  });

test('Testing div -- success', () => {
    const expected = .5;
    const got = mut.div(1, 2);
    expect(got).toBe(expected);
  });

test('Testing div -- success', () => {
    const expected = 0;
    const got = mut.div(0, 2);
    expect(got).toBe(expected);
  });


test('Testing div -- success', () => {
    const expected = Infinity;
    const got = mut.div(2, 0);
    expect(got).toBe(expected);
  });

test('Testing constainsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("test");
    expect(got).toBe(expected);
  });

test('Testing constainsNumbers -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("test1");
    expect(got).toBe(expected);
  });

//Error because an empty string becomes 0 and returns true
test('Testing constainsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers(' ');
    expect(got).toBe(expected);
  });