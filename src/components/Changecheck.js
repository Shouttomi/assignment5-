import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkdata from "../data/Checkdata";

const Changecheck = () => {
  let Newdata = JSON.stringify(Checkdata);
  let arr = JSON.parse(Newdata);

  const helper = (arr, i) => {
    let add = {};
    let goat = [];

    arr[i].sub_departments.forEach((i) => {
      add[i] = false;
    });

    goat.push(add);

    return goat;
  };

  const [checkedItems, setCheckedItems] = useState(helper(arr, 0)[0]);

  const [checkedItems2, setCheckedItems2] = useState(helper(arr, 1)[0]);

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setCheckedItems2((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange1 = (e) => {
    console.log(checkedItems);
    setCheckedItems((previtems) => {
      const obj2 = {};
      for (let key in previtems) {
        if (previtems.hasOwnProperty(key)) {
          obj2[key] = e.target.checked;
        }
      }
      return obj2;
    });
  };

  const handleCheckboxChange2 = (e) => {
    console.log(checkedItems2);
    setCheckedItems2((previtems) => {
      const obj2 = {};
      for (let key in previtems) {
        if (previtems.hasOwnProperty(key)) {
          obj2[key] = e.target.checked;
        }
      }
      return obj2;
    });
  };

  const helperToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const helperToggle2 = () => {
    setToggle2((prevToggle) => !prevToggle);
  };

  const countAllSubitems = () => {
    let count = 0;
    for (let key in checkedItems) {
      if (checkedItems.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  };

  const countAllSubitems2 = () => {
    let count = 0;
    for (let key in checkedItems2) {
      if (checkedItems2.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  };

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <FormGroup>
          <li>
            <button onClick={helperToggle}>
              {" "}
              {!toggle ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
            </button>
            <FormControlLabel
              control={
                <Checkbox
                  id="item1"
                  name="customer_service"
                  value="graphic 1"
                  onChange={handleCheckboxChange1}
                />
              }
              label="customer_service"
            />
            <div style={{ display: "inline", paddingTop: "2px" }}>
              {countAllSubitems()}
            </div>

            {toggle && (
              <ul style={{ listStyle: "none", paddingLeft: "70px" }}>
                {arr[0].sub_departments.map((item, key) => {
                  console.log(item);
                  return (
                    <li>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id={key}
                            name={item}
                            value={`sub ${item}`}
                            checked={checkedItems[item]}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label={item}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </FormGroup>
      </ul>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <FormGroup>
          <li>
            <button onClick={helperToggle2}>
              {" "}
              {!toggle2 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
            </button>
            <FormControlLabel
              control={
                <Checkbox
                  id="item1"
                  name="design"
                  value="graphic 1"
                  onChange={handleCheckboxChange2}
                />
              }
              label="design"
            />
            <div style={{ display: "inline", paddingTop: "2px" }}>
              {countAllSubitems2()}
            </div>

            {toggle2 && (
              <ul style={{ listStyle: "none", paddingLeft: "70px" }}>
                {arr[1].sub_departments.map((item, key) => {
                  console.log(item);
                  return (
                    <li>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id={key}
                            name={item}
                            value={`sub ${item}`}
                            checked={checkedItems2[item]}
                            onChange={handleCheckboxChange3}
                          />
                        }
                        label={item}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </FormGroup>
      </ul>
    </div>
  );
};

export default Changecheck;
