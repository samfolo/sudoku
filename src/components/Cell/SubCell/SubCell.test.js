import SubCell from "./SubCell";
import { setup, findByTestAttr } from "../../../testHelpers";

describe("<SubCell />", () => {
  let wrapper;
  let subCellComponent;

  beforeEach(() => {
    wrapper = setup(SubCell, { value: 9 });
    subCellComponent = findByTestAttr(wrapper, "component-sub-cell");
  });

  it("renders without error", () => {
    expect(subCellComponent).toHaveLength(1);
  });

  it('displays its value', () => {
    expect(subCellComponent.text()).toEqual('9');
  });
});
