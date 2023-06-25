import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import {ReactComponent as IconOSLinux} from "../../../assets/images/icons/ico-linux.svg"
import {ReactComponent as IconOSWindows} from "../../../assets/images/icons/ico-windows.svg"
import {ReactComponent as IconOSOther} from "../../../assets/images/icons/ico-server-other.svg"
import SelectBox from "../../../components/SelectBox";

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
  // Image type data
  const imageData = [
    {
      id: 'ubuntu1',
      icon: 'ubuntu 1',
      name: 'Ubuntu 20.01',
      desc: '64비트 (x86)'
    },{
      id: 'ubuntu2',
      icon: 'ubuntu 2',
      name: 'Ubuntu 20.02',
      desc: '64비트 (x86)'
    },{
      id: 'ubuntu3',
      icon: 'ubuntu 3',
      name: 'Ubuntu 20.03',
      desc: '64비트 (x86)'
    },{
      id: 'ubuntu4',
      icon: 'ubuntu 4',
      name: 'Ubuntu 20.04',
      desc: '64비트 (x86)'
    },{
      id: 'ubuntu5',
      icon: 'ubuntu 5',
      name: 'Ubuntu 20.05',
      desc: '64비트 (x86)'
    },{
      id: 'ubuntu6',
      icon: 'ubuntu 6',
      name: 'Ubuntu 20.06',
      desc: '64비트 (x86)'
    }
  ]

  const flavroData = [
    {
      id: 'flavro1',
      name: 'Flavro2_Base 1',
      desc: 'CPU 1vCore / Memory 32GB / Disk 1'
    },{
      id: 'flavro2',
      name: 'Flavro2_Base 2',
      desc: 'CPU 1vCore / Memory 32GB / Disk 2'
    },{
      id: 'flavro3',
      name: 'Flavro2_Base 3',
      desc: 'CPU 1vCore / Memory 32GB / Disk 3'
    },{
      id: 'flavro4',
      name: 'Flavro2_Base 4',
      desc: 'CPU 1vCore / Memory 32GB / Disk 4'
    },{
      id: 'flavro5',
      name: 'Flavro2_Base 5',
      desc: 'CPU 1vCore / Memory 32GB / Disk 5'
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
          <h2 className="modal-title">가상 머신 생성</h2>
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

            {/* Start :  */}
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

            <h2>서브넷</h2>

            {/* Start : Image type */}
            <div className="content-box">
              <label htmlFor="">이미지 유형</label>

              <div className="tab-type-round">
                <ul>
                  <li>
                    <input type="radio" name="round-tab" id="round-tab-1" checked />
                    <label htmlFor="round-tab-1">이미지</label>
                  </li>
                  <li>
                    <input type="radio" name="round-tab" id="round-tab-2" />
                    <label htmlFor="round-tab-2">부트 볼륨</label>
                  </li>
                </ul>
              </div>
            </div>
            {/* End : Image type */}

            {/* Start : Image choice */}
            <div className="d-flex align-start flex-0">
              {/* Start : Image */}
              <div className="content-box w-100">
                <label htmlFor="" aria-required>이미지</label>

                <div className="d-flex flex-1 gap-24 align-start">
                  {/* Start : Image Select */}
                  <div className="swiper-os-item-wrap">
                    <ul className="os-item-list">
                      <li>
                        <input type="radio" name="slide-item" id="slide-item-1" />
                        <label htmlFor="slide-item-1">
                          <span><IconOSLinux /></span>
                          Linux
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="slide-item" id="slide-item-2" />
                        <label htmlFor="slide-item-2">
                          <span><IconOSWindows /></span>
                          Windows
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="slide-item" id="slide-item-3" />
                        <label htmlFor="slide-item-3">
                          <span><IconOSOther /></span>
                          Other
                        </label>
                      </li>
                    </ul>

                    <button type="button" className="btn-prev" disabled><span>이전</span></button>
                    <button type="button" className="btn-next"><span>다음</span></button>
                  </div>
                  {/* End : Image Select */}

                  <div>
                    {/* Start : Multi line select-box */}
                    <SelectBox data={imageData} />
                    {/* End : Multi line select-box */}

                    <p className="caution">
                      <IconInfo />가상 머신 생성을 위한 운영 체제 이미지를 선택해주세요
                    </p>
                  </div>
                </div>
              </div>
              {/* End : Image */}

              {/* Start : Flavor */}
              <div className="content-box" style={{width: 'calc(50% - 12px)'}}>
                <label htmlFor="" aria-required>Flavor</label>

                {/* Start : Multi line select-box */}
                <SelectBox data={flavroData} direction="top-down" />
                {/* End : Multi line select-box */}

                <p className="caution">
                  <IconInfo />최소 리소스 선택 시 리소스 부족으로 인해 구성요소가 설치되지 않을 수 있습니다.
                </p>
              </div>
              {/* End : Flavor */}
            </div>
            {/* End : Image choice */}

            {/* Start : Description */}
            <div className="content-box">
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
