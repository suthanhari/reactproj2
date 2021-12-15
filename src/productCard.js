export default function ProCards(props) {
    return <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
            <div className="card-body font-14">
                <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{props.data.isPopular}</span>
                <h5 className="mt-3 mb-1 font-weight-medium">{props.data.planName}</h5>
                <h6 className="subtitle font-weight-normal">{props.data.p1}</h6>
                <div classNaame="pricing my-3">
                    <sup>$</sup>
                    <span className="monthly display-5">{props.data.p2}</span>
                    {/* <span className="yearly display-5">240</span> */}
                    {/* <small className="monthly">/mo</small> */}
                    <small className="yearly">/yr</small>
                    <span className="d-block">Save <span class="font-weight-medium">{props.data.p3}</span> a Year</span>
                </div>
                <ul class="list-inline">
                    {
                        props.data.features.map(obj => <li classNAme="d-block py-2 ">{obj.li}</li>)

                    }
                    {/* <li classNAme="d-block py-2">Perfect of Small Team</li>
                    <li className="d-block py-2">Unlimited Invoices</li>
                    <li className="d-block py-2">Project Management</li>
                    <li className="d-block py-2">&nbsp;</li>
                    <li className="d-block py-2">&nbsp;</li> */}
                </ul>
                <div className="bottom-btn">

                <a className={props.data.btnclass} href="#f1"><span>{props.data.btnName}</span></a>
                {/* if(props.data.button){
                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                    
                }else{
                    <a className="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                    
                    
                } */}
                </div>
            </div>
        </div>
    </div>












}