import React, { useState } from "react";

function SignUp() {
  const [Profile, setProfile] = useState({
    Name: "",
    Phone: "",
    Date: "",
    Month: "",
    Year: "",
  });
  const handleSubmit = (e) => {
    alert(
      `${Profile.Name} ${Profile.Phone} ${Profile.Date}${Profile.Month}${Profile.Year}`
    );

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Create your account</h2>
        </div>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            type="text"
            value={Profile.Name}
            onChange={(e) => setProfile({ ...Profile, Name: e.target.value })}
          ></input>
        </div>

        <div>
          <label>Phone</label>
        </div>
        <div>
          <input
            type="number"
            value={Profile.Phone}
            onChange={(e) => setProfile({ ...Profile, Phone: e.target.value })}
          ></input>
        </div>

        <div>
          <div>
            <label>Date Of Birth</label>
          </div>
          <label>Month</label>

          <select
            value={Profile.Month}
            onChange={(e) => setProfile({ ...Profile, Month: e.target.value })}
          >
            <option value=""></option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March </option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <label>Day</label>

          <select
            value={Profile.Date}
            onChange={(e) => setProfile({ ...Profile, Date: e.target.value })}
          >
            <option value=""></option>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <label>Year</label>
          <select
            value={Profile.Year}
            onChange={(e) => setProfile({ ...Profile, Year: e.target.value })}
          >
            <option value=""></option>

            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002 </option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
          </select>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
