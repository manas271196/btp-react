import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import ShapeUtil from "../Util/ShapeUtil";
import AttributeFlexRow from "./AttributeFlexRow"

// Attributes are both dimensions and styles.
// Attributes of a particular Layer.

class LayerAttributeEditor extends React.Component {
  render() {
    const layerId = this.props.layerId;
    const ownDimensionList = this.props.drawing[layerId + "$ownDimensionList"];
    const inheritedDimensionList = this.props.drawing[layerId + "$inheritedDimensionList"];
    const ownStyleList = this.props.drawing[layerId + "$ownStyleList"];
    const inheritedStyleList = this.props.drawing[layerId + "$inheritedStyleList"];

    const ownLayerDimensionsAllProperties = ShapeUtil.getAllLayerOwnDimensionsAllProperties(
      layerId,
      this.props.drawing,
      this.props.overallAttributes
    );

    const inheritedLayerDimensionsAllProperties = ShapeUtil.getAllLayerInheritedDimensionsAllProperties(
      layerId,
      this.props.drawing,
      this.props.overallAttributes
    );

    const ownLayerStylesAllProperties = ShapeUtil.getAllLayerOwnStylesAllProperties(
      layerId,
      this.props.drawing,
      this.props.overallAttributes
    );

    const inheritedLayerStylesAllProperties = ShapeUtil.getAllLayerInheritedStylesAllProperties(
      layerId,
      this.props.drawing,
      this.props.overallAttributes
    );

    if(layerId)
    {
      return (
        <div className="AttributeFlexContainer">
          {ownDimensionList.map((attribute, i) =>
            {
              const attributeName = ownLayerDimensionsAllProperties[attribute + "$name"];
              const attributeValue = ownLayerDimensionsAllProperties[attribute + "$value"];
              const attributeExprString = ownLayerDimensionsAllProperties[attribute + "$exprString"];
              
              return (<AttributeFlexRow
                  key={i}
                  attributeId={layerId + "$" + attribute}
                  attributeName={attributeName}
                  attributeValue={attributeValue}
                  attributeExprString={attributeExprString}
                  shapeOrLayerId={layerId}
                  shapeOrLayer="layer"
                />)
            }
          )}
          {inheritedDimensionList.map((attribute, i) =>
            {
              const attributeName = inheritedLayerDimensionsAllProperties[attribute + "$name"];
              const attributeValue = inheritedLayerDimensionsAllProperties[attribute + "$value"];
              const attributeExprString = inheritedLayerDimensionsAllProperties[attribute + "$exprString"];
              
              return (<AttributeFlexRow
                  key={i}
                  attributeId={layerId + "$" + attribute}
                  attributeName={attributeName}
                  attributeValue={attributeValue}
                  attributeExprString={attributeExprString}
                  shapeOrLayerId={layerId}
                  shapeOrLayer="layer"
                />)
            }
          )}
          {ownStyleList.map((attribute, i) =>
            {
              const attributeName = ownLayerStylesAllProperties[attribute + "$name"];
              const attributeValue = ownLayerStylesAllProperties[attribute + "$value"];
              const attributeExprString = ownLayerStylesAllProperties[attribute + "$exprString"];
              
              return (<AttributeFlexRow
                  key={i}
                  attributeId={layerId + "$" + attribute}
                  attributeName={attributeName}
                  attributeValue={attributeValue}
                  attributeExprString={attributeExprString}
                  shapeOrLayerId={layerId}
                  shapeOrLayer="layer"
                />)
            }
          )}
          {inheritedStyleList.map((attribute, i) =>
            {
              const attributeName = inheritedLayerStylesAllProperties[attribute + "$name"];
              const attributeValue = inheritedLayerStylesAllProperties[attribute + "$value"];
              const attributeExprString = inheritedLayerStylesAllProperties[attribute + "$exprString"];
              
              return (<AttributeFlexRow
                  key={i}
                  attributeId={layerId + "$" + attribute}
                  attributeName={attributeName}
                  attributeValue={attributeValue}
                  attributeExprString={attributeExprString}
                  shapeOrLayerId={layerId}
                  shapeOrLayer="layer"
                />)
            }
          )}
        </div>
      );
    }

    else {
      return (<div />);
    }
  }
}

const mapStateToProps = state => {
  return {
    drawing: state.drawing,
    overallAttributes: state.overallAttributes
  };
};

LayerAttributeEditor = connect(mapStateToProps)(LayerAttributeEditor);

export default LayerAttributeEditor;
