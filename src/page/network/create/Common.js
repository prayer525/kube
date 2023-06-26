import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import SelectBox from "../../../components/SelectBox"

const Common = () => {
  const networkData = [
    {
      id: 'network1',
      name: 'VLAN',
    },
    {
      id: 'network2',
      name: 'VLAN',
    },
    {
      id: 'network3',
      name: 'VLAN',
    },
    {
      id: 'network4',
      name: 'VLAN',
    }
  ]

  return (<>
    {/*
      If "modal-wrap" has class "scrollable" then "modal-body" will scroll.
      <section className="modal-wrap scrollable">
    */}
    <section className="modal-wrap">
      {/* Start : Modal */}
      <article className="modal scrollable">
        {/* Start : Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">네트워크 등록</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          {/* Start : Tab */}
          <ul className="progress-card">
            <li className="current">
              <span className="icon"><IconFileGray /></span>
              <p>
                <strong>기본 설정</strong>
                <span>Current</span>
              </p>
            </li>
            <li>
              <span className="icon"><IconHexagonGray /></span>
              <p>
                <strong>세부 설정</strong>
                <span>To do</span>
              </p>
            </li>
            <li></li>
          </ul>
          {/* End : Tab */}

          <div className="modal-content">
            {/* Start : 이름 */}
            <div className="content-box">
              <label htmlFor="" aria-required>이름</label>
              <div className="input-byte">
                <input type="text" placeholder="입력해 주세요." />
                <span>0 / 50</span>
              </div>
              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>
            {/* End : 이름 */}

            {/* Start : Network type */}
            <div className="d-flex align-start gap-24 flex-1">
              <div className="content-box">
                <label htmlFor="" aria-required>네트워크 유형</label>

                {/* Start : Multi line select-box */}
                <SelectBox data={networkData} type="single" />
                {/* End : Multi line select-box */}
              </div>

              <div className="content-box">
                <label htmlFor="">Segment ID</label>
                <input type="text"/>
              </div>
            </div>
            {/* End : Network type */}

            <h2>서브넷</h2>

            {/* Start : Subnet */}
            <div className="box-radius content-wrap my-24">
              <div className="content-box">
                <label htmlFor="" aria-required>External</label>

                <div className="d-flex justify-start gap-24">
                  <div className="form-radio">
                    <input type="radio" name="rdo-use-yn" value="Y" id="rdo-use-y" />
                    <label htmlFor="rdo-use-y">사용</label>
                  </div>
                  <div className="form-radio">
                    <input type="radio" name="rdo-use-yn" value="N" id="rdo-use-n" />
                    <label htmlFor="rdo-use-n">미사용</label>
                  </div>
                </div>
              </div>

              <div className="d-flex align-start gap-24 flex-1">
                <div className="content-box">
                  <label htmlFor="">MTU</label>

                  <input type="text"/>

                  <p className="caution">
                    <IconInfo />ex) 1,500
                  </p>
                </div>

                <div className="content-box">
                  <label htmlFor="" aria-required>CIDR</label>
                  <input type="text"/>
                </div>

                <div className="content-box">
                  <label htmlFor="">IP POOL 정보</label>

                  <div className="d-flex flex-1 gap-12">
                    <input type="text"/>
                    ~
                    <input type="text"/>
                  </div>
                </div>
              </div>

              <div className="d-flex align-start gap-24 flex-1 m-0">
                <div className="content-box m-0">
                  <label htmlFor="" aria-required>Default Route</label>

                  <div className="d-flex justify-start gap-24">
                    <div className="form-radio">
                      <input type="radio" name="rdo-route-yn" value="Y" id="rdo-route-y" />
                      <label htmlFor="rdo-route-y">사용</label>
                    </div>
                    <div className="form-radio">
                      <input type="radio" name="rdo-route-yn" value="N" id="rdo-route-n" />
                      <label htmlFor="rdo-route-n">미사용</label>
                    </div>
                  </div>
                </div>

                <div className="content-box m-0">
                  <label htmlFor="" aria-required>Gateway IP</label>
                  <input type="text" value="210.192.255.04" />
                </div>
              </div>
            </div>
            {/* End : Subnet */}

            {/* Start : Description */}
            <div className="content-box m-0">
              <label htmlFor="">설명</label>
              <div className="input-byte">
                <input type="text" placeholder="입력해 주세요." />
                <span>0 / 50</span>
              </div>
              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>
            {/* End : Description */}
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-default">취소</button>
          <button type="button" className="btn btn-control">다음</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Common
