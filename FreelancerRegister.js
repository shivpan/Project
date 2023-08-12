import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function FreelancerRegister() {
  const [skillList, setSkillList] = useState([{ skill: "" }]);

  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillList];
    list[index][name] = value;
    setSkillList(list);
  };

  const handleSkillRemove = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  const handleSkillAdd = () => {
    setSkillList([...skillList, { skill: "" }]);
    console.log(skillList);
  };
  return (
    <div>
        <Form className="RegisterForm">
      <h3 className='heading text-center'>Complete Your Profile</h3>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Profile Image</Form.Label>
      <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label> <br/>
        {/* <Form.Control type="email" placeholder="Enter email" /> */}
        //show existing email <br/> <br/>
        <Form.Label>Phone number</Form.Label> <br/>
        //show existing contact no <br/> <br/>
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" /><br/>

        <Form.Label>Headline</Form.Label>
        <Form.Control type="text" placeholder="Enter a 1 line headline about yourself" /><br/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter decription about yourself" /><br/>
      </Form.Group>

      <Form.Group>
        <h3>EDUCATIONAL DETAILS</h3>
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" placeholder="Enter branch" /><br/>
        <Form.Label>Current Year</Form.Label>
        <Form.Select aria-label="Choose Current Year">
            <option className="disabled text-muted">Choose Current Year</option>
            <option value="FE">First Year</option>
            <option value="SE">Second Year</option>
            <option value="TE">Third Year</option>
            <option value="BE">Fourth Year</option>
        </Form.Select><br/>
        <Form.Label>Current Average CGPA</Form.Label>
        <Form.Control type="decimal" placeholder="Enter cgpa" /><br/>
        <Form.Label>Clubs</Form.Label>
        <Form.Control type="text" placeholder="Enter clubs you're part of" /><br/>
        <Form.Label>Number of Live KTs</Form.Label>
        <Form.Control type="number" placeholder="Enter no of live KTs"/> <br/>
      </Form.Group>
      <div>
      <label htmlFor="skill">Skill Set</label>
        {skillList.map((singleSkill, index) => (
          <div key={index} className="skills">
            <div className="first-division">
              <input
                name="skill"
                type="text"
                id="skill"
                value={singleSkill.skill}
                onChange={(e) => handleSkillChange(e, index)}
                required
              />
              {skillList.length - 1 === index && singleSkill.skill!=""  && (
                <button
                  type="button"
                  onClick={handleSkillAdd}
                  className="add btn"
                >
                  <span>Add Skill</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {skillList.length !== 1 && singleSkill.skill!="" && (
                <button
                  type="button"
                  onClick={() => handleSkillRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div> <br/>
      {/* <div className="output">
        <h2>Output</h2>
        {skillList && skillList.map((singleSkill, index) => (
            <ul key={index}>
              {singleSkill.skill && <li>{singleSkill.skill}</li>}
            </ul>
          ))}
      </div> */}
      <Button className="SubmitFormBtn" variant="custom" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  );
}

export default FreelancerRegister;