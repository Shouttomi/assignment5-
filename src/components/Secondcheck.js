import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkdata from "../data/Checkdata";
import { JsonConverter } from "../functions";
import { Subdepthelper } from "../functions";
import { countAllSubitems } from "../functions";

const Secondcheck = () => {
  let arr = JsonConverter(Checkdata);

  const [checkedItems2, setCheckedItems2] = useState(Subdepthelper(arr, 1)[0]);

  const [toggle2, setToggle2] = useState(false);

  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setCheckedItems2((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
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

  const helperToggle2 = () => {
    setToggle2((prevToggle) => !prevToggle);
  };

  return (
    <div>
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
              {countAllSubitems(checkedItems2)}
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

export default Secondcheck;
