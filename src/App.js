import logo from './logo.svg';
import './App.css';
import  './custom/custom.css';

function App() {
  return (

    <nav class="navbar navbar-expand-md">
		  <a class="navbar-brand" href="#">Logo</a>
		  <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
			  <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="main-navigation">
			  <ul class="navbar-nav">
				  <li class="nav-item">
				  	<a class="nav-link" href="#">Home</a>
				  </li>
				  <li class="nav-item">
					  <a class="nav-link" href="#">About</a>
				  </li>
				  <li class="nav-item">
					  <a class="nav-link" href="#">Contact</a>
				  </li>
			  </ul>
		  </div>
	  </nav>

  );
}

export default App;
