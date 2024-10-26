
import React from "react";
import background from "../../images/background.jpg";
import Navbar from "../common/Navbar";

function SignUp() {
    return(

    <div>

      <Navbar />


        <div class="container mt-3">
          <h2>Stacked form</h2>
          <form action="/action_page.php">

            <div class="mb-3 mt-3">
              <label for="name">Name:</label>
              <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" />
            </div>

            <div class="mb-3 mt-3">
              <label for="mobile">Mobile:</label>
              <input type="mobile" class="form-control" id="mobile" placeholder="Enter mobile number" name="mobile" />
            </div>

            <div class="mb-3 mt-3">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
            </div>

            <div class="mb-3 mt-3">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" />
            </div>

            <div class="mb-3">
              <label for="confirmPassword">Confirm password:</label>
              <input type="confirmPassword" class="form-control" id="confirmPassword" placeholder="Repeat password" name="confirmPassword" />
            </div>

            <div class="form-check mb-3">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>





    </div>

    )
}

export default SignUp;