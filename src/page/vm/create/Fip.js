import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import CheckBoxFip from "../../../components/CheckBoxFip";

const Fip = () => {
  const fipData = [
    {
      id: 'fip1',
      address: '10.10.10.11',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr1111'
    },{
      id: 'fip2',
      address: '10.10.10.22',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr2222'
    },{
      id: 'fip3',
      address: '10.10.10.33',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr3333'
    },{
      id: 'fip4',
      address: '10.10.10.44',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr4444'
    },{
      id: 'fip5',
      address: '10.10.10.55',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr5555'
    },{
      id: 'fip6',
      address: '10.10.10.66',
      securityKey: '3a2f2d445ty-433433-43321fgg-vr6666'
    }
  ]

  return (<>
    {/*
      If "modal-wrap" has class "scrollable" then "modal-body" will scroll.
      <section className="modal-wrap scrollable">
    */}
    <section className="modal-wrap">
      {/* Start : Modal */}
      <article className="modal sm">
        {/* Start : Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">FIP IP 연결</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          <div className="modal-content">
            {/* Start : FIP IP */}
            <div className="content-box">
              <label htmlFor="">FIP IP</label>

              {/* Start : Multi line select-box with checkbox */}
              <CheckBoxFip data={fipData} />
              {/* End : Multi line select-box with checkbox */}
            </div>
            {/* End : FIP IP */}
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-default">취소</button>
          <button type="button" className="btn btn-control">저장</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Fip
