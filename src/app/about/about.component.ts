import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `<h1>Brett Koenig</h1>
  <img height="150" src="../../assets/img/profile.JPG" />
  
  <ul>
      <li>The Ohio State University</li>
      <li>NEWPATH</li>
      <li>Experience with JavaScript/Angular: 8</li>
      <li>JavaScript</li>
      <li>I chose HMB because I knew I wanted to learn the entire app infrastructure from front to back. HMB was an option where I knew, through working on various projects, I would have the opportunity to do that. Additionally, they value both work-life balance, and learning; investing in their people to push us to grow.</li>
  </ul>
  
  <h2>States</h2>
  <table>
      <tr>
          <th>
              Picture
          </th>
          <th>
              Name
          </th>
          <th>
              Description
          </th>
          <th>
              Rating (1-5)
          </th>
      </tr>
      <tr>
          <td>
              <img height="150" src="../../assets/img/virginia.jpg" />
          </td>
          <td>
              Virginia
          </td>
          <td>
              3rd Anniversary Trip
          </td>
          <td>
              5
          </td>
      </tr>
      <tr>
              <td>
                  <img height="150" src="../../assets/img/idaho.JPG" />
              </td>
              <td>
                  Idaho
              </td>
              <td>
                  Watching NCAA tournament
              </td>
              <td>
                  4
              </td>
          </tr>
          <tr>
                  <td>
                      <img style="transform: rotate(90deg);" width="150" src="../../assets/img/arizona.JPG" />
                  </td>
                  <td>
                      Arizona
                  </td>
                  <td>
                      Family Vacation
                  </td>
                  <td>
                      3
                  </td>
              </tr>
  </table>`
})
export class AboutComponent { }
