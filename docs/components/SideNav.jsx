import React from 'react';
import { Link } from 'react-router';

class SideNav extends React.Component {
  render() {
    return (
      <aside className="list-group">
        <Link to="" className="list-group-item">快速上手</Link>
        <Link to="" className="list-group-item">定制化</Link>
        <Link to="" className="list-group-item">更新日志</Link>
        <div className="menu">
          <p className="menu-label">Navigation</p>
          <ul className="menu-list">
            <li><Link to="/components/affix" activeClassName="is-active">Affix 固钉</Link></li>
            <li><Link to="/components/scrollto" activeClassName="is-active">ScrollTo 滚动工具</Link></li>
            <li><Link to="/components/breadcrumb" activeClassName="is-active">Breadcrumb 面包屑</Link></li>
            <li><Link to="/components/dropdown" activeClassName="is-active">Dropdown 下拉菜单</Link></li>
            <li><Link to="/components/pagination" activeClassName="is-active">Pagination 分页</Link></li>
            <li><Link to="/components/menu" activeClassName="is-active">Menu 菜单</Link></li>
            <li><Link to="/components/steps" activeClassName="is-active">Steps 步骤条</Link></li>
            <li><Link to="/components/tabs" activeClassName="is-active">Tabs 标签页</Link></li>
          </ul>

          <p className="menu-label">View</p>
          <ul className="menu-list">
            <li><Link to="/components/alert" activeClassName="is-active">Alert 警告框</Link></li>
            <li><Link to="/components/aside" activeClassName="is-active">Aside 侧边模态框</Link></li>
            <li><Link to="/components/collapse" activeClassName="is-active">Collapse 折叠面板</Link></li>
            <li><Link to="/components/modal" activeClassName="is-active">Modal 模态框</Link></li>
            <li><Link to="/components/notify" activeClassName="is-active">Notify 通知</Link></li>
            <li><Link to="/components/tag" activeClassName="is-active">Tag 标签</Link></li>
            <li><Link to="/components/progress" activeClassName="is-active">Progress 进度条</Link></li>
            <li><Link to="/components/popover" activeClassName="is-active">Popover 气泡弹出框</Link></li>
            <li><Link to="/components/popconfirm" activeClassName="is-active">Popconfirm 气泡确认框</Link></li>
            <li><Link to="/components/tooltip" activeClassName="is-active">Tooltip 文字提示</Link></li>
            <li><Link to="/components/timeline" activeClassName="is-active">Timeline 时间线</Link></li>
            <li><Link to="/components/datatable" activeClassName="is-active">Table 表格</Link></li>
          </ul>

          <p className="menu-label">Form</p>
          <ul className="menu-list">
            <li><Link to="/components/form" activeClassName="is-active">Form 表单</Link></li>
            <li><Link to="/components/inputnumber" activeClassName="is-active">InputNumber 数字输入</Link></li>
            <li><Link to="/components/radio" activeClassName="is-active">Radio 单选框</Link></li>
            <li><Link to="/components/checkbox" activeClassName="is-active">Checkbox 复选框</Link></li>
            <li><Link to="/components/switch" activeClassName="is-active">Switch 开关</Link></li>
            <li><Link to="/components/slider" activeClassName="is-active">Slider 滑块</Link></li>
            <li><Link to="/components/datepicker" activeClassName="is-active">DatePicker 日期选择</Link></li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideNav;
