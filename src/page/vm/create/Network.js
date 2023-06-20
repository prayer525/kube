import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconClose} from "../../../assets/images/icons/ico-close-small.svg"

const CommonImage = () => {
  return (<>
    {/*
      If "modal-wrap" has class "scrollable" then "modal-body" will scroll.
      <section className="modal-wrap scrollable">
    */}
    <section className="modal-wrap">
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
            <li className="done">
              <span className="icon"><IconFileGray /></span>
              <p>
                <strong>기본 설정</strong>
                <span>Current</span>
              </p>
            </li>
            <li className="current">
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

            {/* Start : Network */}
            <div className="content-box">
              <label htmlFor="">네트워크</label>

              <div className="box-radius bg-lightgray none-shadow p-12">
                <div className="box-radius box-line none-shadow px-12 mb-12">

                  <div className="fixed-head-wrap">
                    <table className="tbl-list">
                    <caption>네트워크 목록</caption>
                    <colgroup>
                      <col style={{width: '40px'}}/>
                      <col style={{width: '165px'}}/>
                      <col style={{width: '165px'}}/>
                      <col style={{width: '165px'}}/>
                      <col style={{width: '165px'}}/>
                      <col style={{width: 'auto'}}/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th>
                        <div className="form-check">
                          <input type="checkbox" name="chk-1" id="chk-1"/>
                          <label htmlFor="chk-1"></label>
                        </div>
                      </th>
                      <th><strong>네트워크 이름</strong></th>
                      <th><strong>네트워크 유형</strong></th>
                      <th><strong>기본 경로</strong></th>
                      <th><strong>CIDR</strong></th>
                      <th><strong>게이트 웨이</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-2" id="chk-2"/>
                          <label htmlFor="chk-2"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-3" id="chk-3"/>
                          <label htmlFor="chk-3"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-4" id="chk-4"/>
                          <label htmlFor="chk-4"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-5" id="chk-5"/>
                          <label htmlFor="chk-5"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-6" id="chk-6"/>
                          <label htmlFor="chk-6"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-7" id="chk-7"/>
                          <label htmlFor="chk-7"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-8" id="chk-8"/>
                          <label htmlFor="chk-8"></label>
                        </div>
                      </td>
                      <td><p>INT 64</p></td>
                      <td><p>FLAT</p></td>
                      <td><p>미사용</p></td>
                      <td><p>10.10.10.0/24</p></td>
                      <td><p>10.10.10.1</p></td>
                    </tr>
                    </tbody>
                  </table>
                  </div>
                </div>

                <div className="d-flex nowrap align-start gap-4">
                  <div className="badge-item-wrap">
                    <ul className="badge-item-list nowrap">
                      <li>
                        <span>INT 64_A</span>
                        <button type="button"><IconClose /></button>
                      </li>
                      <li>
                        <span>INT 64_A</span>
                        <button type="button"><IconClose /></button>
                      </li>
                    </ul>
                  </div>

                  <div className="d-flex gap-4 flex-0">
                    <button type="button" className="btn">선택 해제</button>
                    <button type="button" className="btn">삭제</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End : Network */}

            {/* Start : SR-IOV 네트워크 */}
            <div className="content-box m-0">
              <label htmlFor="">SR-IOV 네트워크</label>

              <div className="box-radius bg-lightgray none-shadow p-12">
                <div className="box-radius box-line none-shadow px-12 mb-12">

                  <div className="fixed-head-wrap">
                    <table className="tbl-list">
                      <caption>네트워크 목록</caption>
                      <colgroup>
                        <col style={{width: '40px'}}/>
                        <col style={{width: '165px'}}/>
                        <col style={{width: '165px'}}/>
                        <col style={{width: '165px'}}/>
                        <col style={{width: '165px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-1" id="chk-2-1"/>
                            <label htmlFor="chk-2-1"></label>
                          </div>
                        </th>
                        <th><strong>네트워크 이름</strong></th>
                        <th><strong>네트워크 유형</strong></th>
                        <th><strong>기본 경로</strong></th>
                        <th><strong>CIDR</strong></th>
                        <th><strong>게이트 웨이</strong></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-2" id="chk-2-2"/>
                            <label htmlFor="chk-2-2"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-3" id="chk-2-3"/>
                            <label htmlFor="chk-2-3"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-4" id="chk-2-4"/>
                            <label htmlFor="chk-2-4"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-5" id="chk-2-5"/>
                            <label htmlFor="chk-2-5"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-6" id="chk-2-6"/>
                            <label htmlFor="chk-2-6"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-7" id="chk-2-7"/>
                            <label htmlFor="chk-2-7"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" name="chk-2-8" id="chk-2-8"/>
                            <label htmlFor="chk-2-8"></label>
                          </div>
                        </td>
                        <td><p>KubeeseifwerseeKubeeseifwersee…</p></td>
                        <td><p>FLAT</p></td>
                        <td><p>미사용</p></td>
                        <td><p>10.10.10.0/24</p></td>
                        <td><p>10.10.10.1</p></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="d-flex nowrap align-start gap-4">
                  <div className="badge-item-wrap">
                    <ul className="badge-item-list nowrap">
                      <li>
                        <span>Kubevirtworkerens1f_01</span>
                        <button type="button"><IconClose /></button>
                      </li>
                      <li>
                        <span>Kubevirtworkerens1f_01</span>
                        <button type="button"><IconClose /></button>
                      </li>
                      <li>
                        <span>Kubevirtworkerens1f_01</span>
                        <button type="button"><IconClose /></button>
                      </li>
                      <li>
                        <span>Kubevirtworkerens1f_01</span>
                        <button type="button"><IconClose /></button>
                      </li>
                      <li>
                        <span>Kubevirtworkerens1f_01</span>
                        <button type="button"><IconClose /></button>
                      </li>
                    </ul>

                    <div className="control">
                      <button type="button" className="btn-prev" disabled><span>prev</span></button>
                      <button type="button" className="btn-next"><span>next</span></button>
                    </div>
                  </div>

                  <div className="d-flex gap-4 flex-0">
                    <button type="button" className="btn">선택 해제</button>
                    <button type="button" className="btn">삭제</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End : SR-IOV 네트워크 */}
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
