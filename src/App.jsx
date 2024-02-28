import './App.css';
import desktopImg from './assets/images/bg-sidebar-desktop.svg'
import mobileImg from './assets/images/bg-sidebar-mobile.svg'
function App() {
  return (
    <>
    <main>
      <section className='section'>
        <div className="container">
          <div className="columns">
            <div className='steps-column'>
              <img className='mobile-img' src={mobileImg} alt="" />
              <img className='desktop-img' src={desktopImg} alt="" />
              <ol role='list' className='list-steps'>
                <li>
                  <span className="list-numbering | bg-accent-300 text-accent-700 fs-200">
                    1
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 1</span>
                    <p className='text-primary-100 fw-medium'>YOUR INFO</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
                    2
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 2</span>
                    <p className='text-primary-100 fw-medium'>SELECT PLAN</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
                    3
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 3</span>
                    <p className='text-primary-100 fw-medium'>ADD-ONS</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
                    4
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 4</span>
                    <p className='text-primary-100 fw-medium'>SUMMARY</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className='user-column spacer-bottom padding-top-2'>

              <form className='form'>
                <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Personal info</h1>
                <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>Please provide your name, email address, and phone number.</p>
                <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Name</label>
                <div className='padding-inline-1'>
                  <input type="text"
                  className='fs-body'
                  placeholder='e.g. Stephen King' />
                </div>
              

                <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Email Address</label>
                <div className='padding-inline-1'>
                  <input type="text"
                  className='fs-body'
                  placeholder='e.g. stephenking@lorem.com' />
                </div>
              
                <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Phone Number</label>
                <div className='padding-inline-1'>
                  <input type="text"
                  className='fs-body'
                  placeholder='e.g. +1 234 567 890' />
                </div>
              </form>
              
              <div className='action-btns | fw-medium'>
                <button className='prev-btn'>
                  Go Back
                </button>
                <button className='next-btn'>
                  Next Step
                </button>
              </div>

              
            </div>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}

export default App;
