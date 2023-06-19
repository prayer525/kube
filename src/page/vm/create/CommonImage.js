import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import {ReactComponent as IconOSLinux} from "../../../assets/images/icons/ico-linux.svg"
import {ReactComponent as IconOSWindows} from "../../../assets/images/icons/ico-windows.svg"
import {ReactComponent as IconOSOther} from "../../../assets/images/icons/ico-server-other.svg"


const CommonImage = () => {
  return (<>
    <section className="modal-wrap">
      <div className="back-panel">{/* for modal close when click on background */}</div>

      {/* Start : Modal */}
      <article className="modal">
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
              <span className="icon"><IconPathfindGray /></span>
              <p>
                <strong>네트워크 설정</strong>
                <span>To do</span>
              </p>
            </li>
            <li>
              <span className="icon"><IconHexagonGray /></span>
              <p>
                <strong>세부 설정</strong>
                <span>To do</span>
              </p>
            </li>
          </ul>
          {/* End : Tab */}

          <div className="modal-content">

            <div className="form-box">
              <label htmlFor="" aria-required>이름</label>
              <div className="input-byte">
                <input type="text" placeholder="입력해 주세요." />
                <span>0 / 50</span>
              </div>
              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>

            <div className="form-box">
              <label htmlFor="">이미지 유형</label>

              <div className="tab-type-round">
                <ul>
                  <li>
                    <input type="radio" name="round-tab" id="round-tab-1" />
                    <label htmlFor="round-tab-1">이미지</label>
                  </li>
                  <li>
                    <input type="radio" name="round-tab" id="round-tab-2" />
                    <label htmlFor="round-tab-2">부트 볼륨</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-1 gap-24">
              <div className="form-box">
                <label htmlFor="" aria-required>이미지</label>

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
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="">이미지 유형</label>

                <div className="tab-type-round">
                  <ul>
                    <li>
                      <input type="radio" name="round-tab" id="round-tab-1" />
                      <label htmlFor="round-tab-1">이미지</label>
                    </li>
                    <li>
                      <input type="radio" name="round-tab" id="round-tab-2" />
                      <label htmlFor="round-tab-2">부트 볼륨</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn">취소</button>
          <button type="button" className="btn btn-dark">다음</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default CommonImage
