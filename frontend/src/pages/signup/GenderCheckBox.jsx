import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className="flex gap-2">
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text text-stone-50 text-base">Male</span>
                <input type="radio" name="gender" value="male" className="radio radio-info"  />
            </label>
        </div>
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text text-stone-50 text-base">Female</span>
                <input type="radio" name="gender" value="female" className="radio radio-info"  />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckBox