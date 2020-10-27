import React from "react";
export default function Card() {
  return (
    <div className="container ">
      <h1 id="title" className="text-center">
        Find Out What Your Carbon Footprint Is
      </h1>
      <p className=" mt-4 font-weight-light text-center">
        The first step towards mitigating global warming and climate change
        crisis is for us as humanbeings to understand whats's our individual
        footprint and how it compares to country and world average. This
        footprint spans across all 4 major areas of our life listed below and
        that is why our survey is designed to measure your carbon footprint by
        having you answer questions across all spectrums.
      </p>
      <div className="row mt-4">
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              className="card-img-top"
              alt="food"
            />
            <div className="card-body">
              <h5 className="card-title">Food</h5>
              <p className="card-text">
                A large proportion of greenhouse gas emissions comes from food
                production.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1475088092121-b7d3cd6e1482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Transport</h5>
              <p className="card-text text-lowercase">
                TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S
                FOOTPRINT.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Home</h5>
              <p className="card-text">
                Buildings are one of the biggest greenhouse gas emittors
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Stuff</h5>
              <p className="card-text text-lowercase">
                THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
