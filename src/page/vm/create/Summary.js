import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"

const Advanced = () => {

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
          <h2 className="modal-title">생성 내역</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          <div className="modal-content">
            <h2 className="title">Test232 01</h2>

            <ul className="vm-create-summary">
              <li>
                <dl>
                  <dt><span><IconFileGray /></span>기본 설정</dt>
                  <dd>
                    <table className="tbl-noline thin">
                      <caption>기본 설정</caption>
                      <colgroup>
                        <col style={{width: '90px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>이미지</th>
                        <td>
                          <p>
                            <strong>Ubuntu 20.04</strong>
                            <span>64비트 (x86)</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Flavor</th>
                        <td>
                          <p>
                            <strong>1.large</strong>
                            <span>CPU 1vCore/ Memory 32GB / Disk 1</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>설명</th>
                        <td>
                          <p>
                            <span>799E에 의해 생성</span>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt><span><IconPathfindGray /></span>네트워크 설정</dt>
                  <dd>
                    <table className="tbl-noline thin">
                      <caption>네트워크 설정</caption>
                      <colgroup>
                        <col style={{width: '90px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>네트워크</th>
                        <td>
                          <p>
                            <strong>INT 64</strong>
                            <span>FLAT /라우터 사용</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>기본 경로</th>
                        <td>
                          <p>
                            <span>10.10.10.0</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Gateway IP</th>
                        <td>
                          <p>
                            <span>192.168.62.0/24</span>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </dd>
                  <dd>
                    <table className="tbl-noline thin">
                      <caption>네트워크 설정</caption>
                      <colgroup>
                        <col style={{width: '90px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>SR-IOV 네트워크</th>
                        <td>
                          <p>
                            <strong>kubevirtworkerens1f</strong>
                            <span>VLAN</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>기본 경로</th>
                        <td>
                          <p>
                            <span>10.10.10.0</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Gateway IP</th>
                        <td>
                          <p>
                            <span>192.168.62.0/24</span>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt><span><IconHexagonGray /></span>세부 설정</dt>
                  <dd>
                    <table className="tbl-noline thin">
                      <caption>세부 설정</caption>
                      <colgroup>
                        <col style={{width: '90px'}}/>
                        <col style={{width: 'auto'}}/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>키 페어</th>
                        <td>
                          <p>
                            <span>ZSEWR-WERW-WE02</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>보안그룹</th>
                        <td>
                          <p>
                            <span>VBA-1Team</span>
                            <span>VBA-1Team</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>노드</th>
                        <td>
                          <p>
                            <span>설정되지 않음</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>유저네임</th>
                        <td>
                          <p>
                            <span>Soonsin Lee</span>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-control">생성</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Advanced
