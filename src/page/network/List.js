import { ReactComponent as IconPageTitle } from '../../assets/images/icons/ico-page-title.svg';
import { ReactComponent as IconSquare } from '../../assets/images/icons/ico-dbl-square.svg';

import TableQuickMenu from "../../components/TableQuickMenu";
import TableControl from "../../components/TableControl";
import TableSearch from "../../components/TableSearch";

const NetworkList = () => {
  return (<>
    <div style={{background: '#eff4f9', padding: '20px', minHeight: '100vh'}}>
      <h1 className="h1-page-title">
        <IconPageTitle />네트워크 관리
      </h1>

      <TableSearch />

      <div style={{background:"#FFFFFF", padding: "0 12px 12px 12px"}}>
        <table className="tbl-list">
          <caption>네트워크 목록</caption>
          <colgroup>
            <col style={{width: '40px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: '190px'}}/>
            <col style={{width: 'auto'}}/>
            <col style={{width: '40px'}}/>
          </colgroup>
          <thead>
          <tr>
            <th>
              <div className="form-check">
                <input type="checkbox" name="chk-2-1" id="chk-2-1"/>
                <label htmlFor="chk-2-1"></label>
              </div>
            </th>
            <th><strong>이름</strong></th>
            <th><strong>네트워크 유형</strong></th>
            <th><strong>MTU</strong></th>
            <th><strong>CIDR</strong></th>
            <th><strong>GATEWAY IP</strong></th>
            <th><strong>Segment ID</strong></th>
            <th><strong>등록자</strong></th>
            <th><strong>등록자</strong></th>
            <th><strong></strong></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-1" id="chk-1-1"/>
                <label htmlFor="chk-1-1"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td>
              <TableQuickMenu />
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-2" id="chk-1-2"/>
                <label htmlFor="chk-1-2"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-3" id="chk-1-3"/>
                <label htmlFor="chk-1-3"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-4" id="chk-1-4"/>
                <label htmlFor="chk-1-4"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-5" id="chk-1-5"/>
                <label htmlFor="chk-1-5"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-6" id="chk-1-6"/>
                <label htmlFor="chk-1-6"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-7" id="chk-1-7"/>
                <label htmlFor="chk-1-7"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-8" id="chk-1-8"/>
                <label htmlFor="chk-1-8"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-9" id="chk-1-9"/>
                <label htmlFor="chk-1-9"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" name="chk-1-10" id="chk-1-10"/>
                <label htmlFor="chk-1-10"></label>
              </div>
            </td>
            <td><p className="tall"><IconSquare /><span>KubeeseifwerseeKubeeseifwersee…</span></p></td>
            <td><p>FLAT</p></td>
            <td><p>1500</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>10.10.10.30</p></td>
            <td><p>1000</p></td>
            <td><p>Admin</p></td>
            <td><p>2023-04-01 09:55</p></td>
            <td><TableQuickMenu /></td>
          </tr>
          </tbody>
        </table>
      </div>

      <TableControl />
    </div>
  </>)
}

export default NetworkList
