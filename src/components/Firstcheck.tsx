import React, { useState, ChangeEvent } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkdata from "../data/Checkdata";
import { JsonConverter } from "../functions";
import { Subdepthelper } from "../functions";
import { countAllSubitems } from "../functions";
import Button from "@mui/material/Button";




interface CheckItem {
  [key: string]: boolean;
}

interface Props {
  ind: number;
  lab: string;
}

type CheckdataItem = {
  department: string;
  sub_departments: string[];
};

const Firstcheck: React.FC<Props> = ({ ind, lab }) => {
  const arr: CheckdataItem[] = JsonConverter(Checkdata);

  const [checkedItems, setCheckedItems] = useState<CheckItem>(
    Subdepthelper(arr, ind)[0]
  );

  const [toggle, setToggle] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems((prevItems) => {
      const updatedItems: CheckItem = {};
      for (const key in prevItems) {
        if (prevItems.hasOwnProperty(key)) {
          updatedItems[key] = e.target.checked;
        }
      }
      return updatedItems;
    });
  };

  const helperToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex1">
      <ul style={{ listStyle: "none", padding: 0 }}>
        <FormGroup>
          <li className="buttonandcheck">
            <div className="controller">
              <Button
                variant="contained"
                onClick={helperToggle}
                sx={{ height: 30, margintop: 10, padding: 0 }}
              >
                {toggle ? <RemoveIcon /> : <AddIcon />}
              </Button>
            </div>

            <div className="flex2">
              <FormControlLabel
                control={
                  <Checkbox
                    id={`item${lab}`}
                    name={`options${lab}`}
                    onChange={handleCheckboxChange1}
                  />
                }
                label={lab}
              />
              <div style={{ display: "inline", paddingTop: "2px" }}>
                {`(${countAllSubitems(checkedItems)})`}
              </div>

              {toggle && (
                <ul style={{ listStyle: "none", paddingLeft: "70px" }}>
                  {arr[ind].sub_departments.map((item, key) => {
                   
                    return (
                      <li key={key}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id={key.toString()}
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
            </div>
          </li>
        </FormGroup>
      </ul>
    </div>
  );
};

export default Firstcheck;
