import React, { useState } from "react";

const Checkbox = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const [toggle, setToggle] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange1 = (e) => {
    if (e.target.checked === true) {
      setCheckedItems((previtems) => {
        const obj2 = {};
        for (let key in previtems) {
          if (previtems.hasOwnProperty(key)) {
            obj2[key] = true;
          }
        }
        return obj2;
      });
    } else {
      setCheckedItems((previtems) => {
        const obj2 = {};
        for (let key in previtems) {
          if (previtems.hasOwnProperty(key)) {
            obj2[key] = false;
          }
        }
        return obj2;
      });
    }
  };

  const helperToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <button onClick={helperToggle}>hello</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <input
            className="nostyle"
            type="checkbox"
            id="item1"
            name="item1"
            value="Item 1"
            checked={checkedItems.item1}
            onChange={handleCheckboxChange1}
            style={{ display: "inline" }}
          />
          <label htmlFor="item1">Item 1</label>
          {toggle && (
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              <li>
                <input
                  className="nostyle"
                  type="checkbox"
                  id="subitem1"
                  name="item2"
                  value="Sub Item 1"
                  checked={checkedItems.item2}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="subitem1">Sub Item 1</label>
              </li>
              <li>
                <input
                  className="nostyle"
                  type="checkbox"
                  id="subitem2"
                  name="item3"
                  value="Sub Item 2"
                  checked={checkedItems.item3}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="subitem2">Sub Item 2</label>
              </li>
              <li>
                <input
                  className="nostyle"
                  type="checkbox"
                  id="subitem3"
                  name="item4"
                  value="Sub Item 3"
                  checked={checkedItems.item4}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="subitem3">Sub Item 3</label>
              </li>
            </ul>
          )}
        </li>
        {/* ... Repeat the same structure for other items ... */}
      </ul>
    </div>
  );
};

export default Checkbox;
