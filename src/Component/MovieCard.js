import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieCard(props) {
  // const {title="Ezzine Wael",description="Not much to talk about",rate="still a Student",handleName} =props;
  
  return (
    <div>
          <div>
                
                <div class="card mb-3" style={{maxWidth:"200px"}}> 
                <div class="row no-gutters">
            <div class="col-md-8">
      <div class="card-body">
  <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.description}
        </p>
        <p class="card-text"><small class="text-muted">
          {props.rate}
          </small></p>
      </div>
    </div>
  </div>
</div>
            </div>
      
    </div>
  )
}

export default MovieCard
