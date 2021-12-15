import logo from './logo.svg';
import './App.css';
import ProCards from './productCard';


export default function App() {
  let productPrice = [
    {
      planName: "BASIC",
      isPopular: false,
      p1: "For Team of 3-5 Members",
      p2: "$28",
      p3: "$20",
      btnName: "Choose Plan",
      btnclass:'btn btn-success-gradiant btn-md text-white btn-block',
      features: [
        {
          li: "Perfect of Small Team"
        },
        {
          li: "Unlimited Invoices"
        },
        {
          li: "Project Management"
        },
       
        
      ]



    },
    {
      planName: "INTERMEDIATE",
      isPopular: "Popular",
      p1: "For Team of 5-10 Members",
      p2: "39",
      p3: "30",
      btnName: "Choose Plan",
      btnclass:'btn btn-danger-gradiant btn-md text-white btn-block',
      
      features: [
        {
          li: "Perfect of Small Team"
        },
        {
          li: "Unlimited Invoices"
        },
        {
          li: "Project Management"
        },
        {
          li: "Team Management"
        },
        
        

      ]
    },
    {
      planName: "HIGH CLASS",
      isPopular: false,
      p1: "For Team of 10-25 Members",
      p2: "58",
      p3: "50",
      btnName: "Choose Plan",
      btnclass:'btn btn-success-gradiant btn-md text-white btn-block',
      
      features: [
        {
          li: "Perfect of Small Team"
        },
        {
          li: "Unlimited Invoices"
        },
        {
          li: "Project Management"
        },
        {
          li: "Team Management"
        },
        {
          li: "Time Tracking"
        },
        
      ]


    },
  
  {
      planName: "SUPREME",
      isPopular: false,
      p1: "For Team of 25-100 Members",
      p2: "99",
      p3: "80",
      btnName: "Choose Plan",
      btnclass:'btn btn-success-gradiant btn-md text-white btn-block',

      features: [
        {
          li: "Perfect of Small Team"
        },
        {
          li: "Unlimited Invoices"
        },
        {
          li: "Project Management"
        },
        {
          li: "Team Management"
        },
        {
          li: "Time Tracking"
        },
        
      ]
    },
  ];

  return (
    <div className="pricing1 py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
        
            <div className="col-md-12 text-center">
              <h3 className="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
              <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
              <div className="switcher-box mt-4 d-flex align-items-center justify-content-center">
                <span className="font-14 font-weight-medium">MONTHLY</span>
                <div className="onoffswitch position-relative mx-2">
                  <input type="checkbox" name="onoffswitch1" className="onoffswitch-checkbox d-none" id="myonoffswitch1" />
                  <label className="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
                    <span className="onoffswitch-inner d-block"></span>
                    <span className="onoffswitch-switch d-block bg-white position-absolute"></span>
                  </label>
                </div>
                <span className="font-14 font-weight-medium">YEARLY</span>
              </div>
            </div>
          </div>
          <div className="row mt-5">



            {
              productPrice.map((obj) => <ProCards data={obj}></ProCards>)

            }


          </div>
        </div>
      </div>
   
  );


}

