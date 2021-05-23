var html = `
<nav class="navbar navbar-light bg-light navbar-expand-lg position-sticky fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="./">
          <img src="../assets/images/capstone.png" height="50px" />
        </a>

        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

      </div>

      <div class="collapse navbar-collapse" id="navbarLinks">

            <ul class="navbar-nav ml-auto justify-content-end">

                <!--<li class="nav-item">
                    <a class="nav-link" href="https://d8a-88.github.io/textbook">Textbook</a>
                </li>-->

                <li class="nav-item">
                    <a class="nav-link" href="policies.html">Policies</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="staff.html">Staff</a>
                </li>

                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://www.gradescope.com/courses/241971">Gradescope</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://discord.gg/rdAwEtPGFF">Discord</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./python-reference.html">Python Reference</a>
                    <a class="dropdown-item" href="final_project.html">Final Project</a>
                    <a class="dropdown-item" href="http://data8.org/datascience/">Datascience Docs</a>
                    <a class="dropdown-item" href="https://docs.google.com/document/d/1j24HBcrDa9J18EaTMSIAuzAtxB2w4wI_oFZmhqb0eic/edit?usp=sharing/">Final Project Prompt & Rubric</a>
                    <a class="dropdown-item" href="https://docs.google.com/document/d/1OqHk6P8qUx9rOe4Av_JlQ-gv_zk550f_elJjKjL4UgA/edit?usp=sharing/">Project Dataset and Analysis Examples</a>
                    <a class="dropdown-item" href="https://datahub.berkeley.edu/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2[…]-SP21%2Fcovid19_vacc%2Fcovid19_vacc_prog.ipynb&branch=main">Example Notebooks</a>
                    <a class="dropdown-item" href="https://www.youtube.com/playlist?list=PLxah1rLbuvW3drmK7mFBYf-3IIBW60gv9">Lecture Recordings</a>
                  </div>
                </li>


            </ul>

        </div>
        </div>
  </nav>
  `;

  document.write(html);
