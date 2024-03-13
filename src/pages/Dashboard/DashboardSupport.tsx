import { useCallback, useState } from 'react';
import TreeView, { TreeViewTypes } from 'devextreme-react/tree-view';

const docs = [{
  id: '1',
  text: 'Cloud Storage',
  expanded: true,
  items: [{
    id: '1_1',
    text: 'Add Cloud Storage',
    items: [{
      id: '1_1_1',
      text: 'Add Cloud Storage Node'
    }, {
      id: '1_1_2',
      text: 'Add Cloud Storage Cluster'
    }]
  }, {
    id: '1_2',
    text: 'Cloud Storage Nodes',
    items: [{
      id: '1_2_1',
      text: 'Cloud Storage Nodes List'
    }, {
      id: '1_2_2',
      text: 'Cloud Storage Node Details'
    }]
  }],
}, {
  id: '2',
  text: 'Virtual Machines',
  items: [{
    id: '2_1',
    text: 'Add Virtual Machine',
    items: [{
      id: '2_1_1',
      text: 'Add Virtual Machine Node'
    }, {
      id: '2_1_2',
      text: 'Add Virtual Machine Cluster'
    }]
  }, {
    id: '2_2',
    text: 'Virtual Machines',
    items: [{
      id: '2_2_1',
      text: 'Virtual Machines List'
    }, {
      id: '2_2_2',
      text: 'Virtual Machine Details'
    }]
  }],
}, {
  id: '3',
  text: 'Web Hosting',
  items: [{
    id: '3_1',
    text: 'Add Web Hosting',
    items: [{
      id: '3_1_1',
      text: 'Add Web Hosting Node'
    }, {
      id: '3_1_2',
      text: 'Add Web Hosting Cluster'
    }]
  }, {
    id: '3_2',
    text: 'Web Hosting',
    items: [{
      id: '3_2_1',
      text: 'Web Hosting List'
    }, {
      id: '3_2_2',
      text: 'Web Hosting Details'
    }]
  }],
}, {
  id: '4',
  text: 'Support',
  items: [{
    id: '4_1',
    text: 'Support Documentation'
  }, {
    id: '4_2',
    text: 'Support Ticket'
  }],
}];

const DashboardSupport = () => {
  const [currentItem, setCurrentItem] = useState({ ...docs[0] });

  const onItemClick = useCallback((e: TreeViewTypes.ItemClickEvent) => {
    setCurrentItem({ ...e.itemData });

  }, [setCurrentItem]);

  return (
    <div>
      <h1 className="m-4">Support</h1>
      <hr className="h-1 m-4 bg-gray-700 border-0 rounded" />
      <h4 className="my-4 mx-10">Support Documentation</h4>
      <div className="grid grid-cols-2 gap-1">
        <div className="ml-4">
          <TreeView
            id="treeview"
            items={docs}
            width={300}
            height={500}
            searchMode="contains"
            searchEnabled={true}
            onItemClick={onItemClick}
          />
        </div>
        <div>
          <h3>{currentItem.text}</h3>
        </div>
      </div>
    </div>
  );
}

export default DashboardSupport;

