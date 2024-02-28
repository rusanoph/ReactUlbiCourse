import React from 'react'
import Select from "../components/UI/select/Select";
import Input from "../components/UI/input/Input";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <Input 
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder="Search"
        />
        <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Sort by..."
            options={[
                {value: "title", name: "By Title"},
                {value: "body", name: "By Body"},
            ]}
        />
    </div>
  )
}

export default PostFilter