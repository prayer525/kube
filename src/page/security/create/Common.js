import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import SelectBox from "../../../components/SelectBox";
import Select from "../../../components/Select";
import {useEffect, useState} from "react";

const SecurityCommon = () => {
  const [select, setSelect] = useState('')

  useEffect(() => {
    console.log('parent select value :' , select)
  }, [select])
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
          <h2 className="modal-title">보안 그룹 등록</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          <div className="modal-content">
            <div className="content-box">
              <label htmlFor="" aria-required>이름</label>

              <div className="input-byte">
                <input type="text"/>
                <span>0/50</span>
              </div>

              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>

            <div className="content-box">
              <label htmlFor="">설명</label>

              <div className="input-byte">
                <input type="text"/>
                <span>0/50</span>
              </div>

              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>
            <div className="content-box m-0">
              <label htmlFor="">보안정책</label>

              <div className="box-radius bg-lightgray none-shadow p-12">
                <div className="box-radius box-line none-shadow px-12 mb-12">
                  <table className="tbl-list low-pad">
                    <caption></caption>
                    <colgroup>
                      <col style={{width: '40px'}}/>
                      <col style={{width: '138px'}}/>
                      <col style={{width: '138px'}}/>
                      <col style={{width: '138px'}}/>
                      <col style={{width: '138px'}}/>
                      <col style={{width: '138px'}}/>
                      <col style={{width: '138px'}}/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th>
                        <div className="form-check">
                          <input type="checkbox" name="chk-1-1" id="chk-1-1"/>
                          <label htmlFor="chk-1-1"></label>
                        </div>
                      </th>
                      <th><strong>정책</strong></th>
                      <th><strong>정책 방향</strong></th>
                      <th><strong>이더넷 유형</strong></th>
                      <th><strong>원격 IP 범위 </strong></th>
                      <th><strong>프로토콜</strong></th>
                      <th><strong>포트 범위</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-1-2" id="chk-1-2"/>
                          <label htmlFor="chk-1-2"></label>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="Default" disabled />
                      </td>
                      <td>
                        <input type="text" value="Default" disabled />
                      </td>
                      <td>
                        <Select value={1} onChange={setSelect} disabled>
                          <option value="1">text1</option>
                          <option value="2">text2</option>
                          <option value="3">text3</option>
                        </Select>
                      </td>
                      <td>
                        <div className="form-check h-32">
                          <input type="checkbox" name="chk-1-3" id="chk-1-3" />
                          <label htmlFor="chk-1-3">ALL 허용</label>
                        </div>
                        <div className="d-flex flex-1 gap-4">
                          <input type="text"/>
                          <input type="text"/>
                        </div>
                      </td>
                      <td>
                        <Select value={1} onChange={setSelect} disabled>
                          <option value="1">text1</option>
                          <option value="2">text2</option>
                          <option value="3">text3</option>
                        </Select>
                      </td>
                      <td>
                        <div className="form-check h-32">
                          <input type="checkbox" name="chk-1-4" id="chk-1-4" />
                          <label htmlFor="chk-1-4">ALL 허용</label>
                        </div>
                        <div className="d-flex flex-1 gap-4">
                          <input type="text"/>
                          <input type="text"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" name="chk-1-5" id="chk-1-5"/>
                          <label htmlFor="chk-1-5"></label>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="Default" />
                      </td>
                      <td>
                        <input type="text" value="Default" />
                      </td>
                      <td>
                        <Select value={1} onChange={setSelect}>
                          <option value="1">text1</option>
                          <option value="2">text2</option>
                          <option value="3">text3</option>
                        </Select>
                      </td>
                      <td>
                        <div className="form-check h-32">
                          <input type="checkbox" name="chk-1-6" id="chk-1-6" />
                          <label htmlFor="chk-1-6">ALL 허용</label>
                        </div>
                        <div className="d-flex flex-1 gap-4">
                          <input type="text"/>
                          <input type="text"/>
                        </div>
                      </td>
                      <td>
                        <Select value={1} onChange={setSelect}>
                          <option value="1">text1</option>
                          <option value="2">text2</option>
                          <option value="3">text3</option>
                        </Select>
                      </td>
                      <td>
                        <div className="form-check h-32">
                          <input type="checkbox" name="chk-1-7" id="chk-1-7" />
                          <label htmlFor="chk-1-7">ALL 허용</label>
                        </div>
                        <div className="d-flex flex-1 gap-4">
                          <input type="text" placeholder="min" />
                          <input type="text" placeholder="max" />
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-end gap-4">
                  <button type="button" className="btn btn-default text-gray">삭제</button>
                  <button type="button" className="btn btn-default">추가</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-control">저장</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default SecurityCommon
