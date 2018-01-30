import * as React from 'react';
import { Icon } from 'react-native-elements';
import { AppText } from '../app-text';
import { View, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { renderTeamStyle } from '../../TeamStyle';
import { FormattedTime } from '../formatted-time';
import { TimeToNow } from '../time-to-now';
import { take } from 'ramda';

const regionColours = {
  EU: '#1E88E5',
  NA: '#F44336',
  OC: '#009688',
  AS: '#D81B60',
  AF: '#43A047',
  SA: '#673AB7',
};

export class MatchPreview extends React.PureComponent {
  static styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'stretch',
      elevation: 1,
      backgroundColor: '#37474F',
      borderWidth: 2,
      borderRightColor: '#37474F',
      flex: 1,
    },
    cardLeft: {
      padding: 10,
      alignItems: 'center',
      width: '25%',
      justifyContent: 'space-between',
    },
    cardRight: {
      alignItems: 'stretch',
      flex: 1,
    },
    verticalDivider: {
      width: 1,
      marginTop: 3,
      marginBottom: 3,
      backgroundColor: '#e1e8ee',
    },
    horizontalDivider: {
      height: 1,
      marginLeft: 3,
      marginRight: 3,
      backgroundColor: '#e1e8ee',
    },
    timing: {
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    region: {
      fontSize: 18,
    },
    day: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    time: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    relativeTime: {
      textAlign: 'center',
    },
    titleWrapper: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      flex: 1,
      marginBottom: 2,
    },
    teamStyle: {
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 16,
    },
    scenariosWrapper: {
      margin: 5,
      flex: 1,
      justifyContent: 'center',
    },
    scenarioWrapper: {
      flexDirection: 'row',
      margin: 2,
    },
    scenario: {
      flex: 1,
      fontSize: 16,
      paddingTop: 3,
      paddingLeft: 5,
    },
    leftText: {},
    expander: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderWidth: 0,
    },
    expanderButton: {},
    scroller: {
      width: '200%',
    },
    details: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  state = {
    expanded: false,
  };

  _toggleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));

  render() {
    const teamStyle = renderTeamStyle(
      this.props.match.teamStyle,
      this.props.match.size,
      this.props.match.customStyle
    );

    const colour = regionColours[this.props.match.region];
    const underlay = `${colour}33`;

    const background = {
      backgroundColor: colour,
    };

    const border = {
      borderTopColor: colour,
      borderLeftColor: colour,
      borderRightColor: colour,
      borderBottomColor: colour,
    };

    let scenarios = this.props.match.scenarios;

    const expandable = scenarios.length > 4;

    if (expandable && !this.state.expanded) {
      scenarios = take(4, scenarios);
    }

    return (
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={MatchPreview.styles.scroller}
      >
        <View style={[border, MatchPreview.styles.card]}>
          <View style={[MatchPreview.styles.cardLeft, background]}>
            <AppText
              bold
              style={[MatchPreview.styles.region, MatchPreview.styles.leftText]}
            >
              {this.props.match.region}
            </AppText>
            <View style={MatchPreview.styles.timing}>
              <AppText
                style={[MatchPreview.styles.day, MatchPreview.styles.leftText]}
              >
                TODAY
              </AppText>
              <FormattedTime
                style={[MatchPreview.styles.time, MatchPreview.styles.leftText]}
                time={this.props.match.opens}
                format="HH:mm z"
              />
            </View>
            <View>
              <TimeToNow
                time={this.props.match.opens}
                style={[
                  MatchPreview.styles.relativeTime,
                  MatchPreview.styles.leftText,
                ]}
              />
            </View>
          </View>
          <View style={MatchPreview.styles.cardRight}>
            <View style={MatchPreview.styles.titleWrapper}>
              <AppText style={MatchPreview.styles.title} bold>
                {this.props.match.hostingName || this.props.match.author}'s #{
                  this.props.match.count
                }
              </AppText>
              <AppText>/r/{this.props.match.author}</AppText>
            </View>
            <View style={[MatchPreview.styles.horizontalDivider, background]} />
            <AppText style={MatchPreview.styles.teamStyle} bold>
              {teamStyle}
            </AppText>
            <View style={[MatchPreview.styles.horizontalDivider, background]} />
            <View style={MatchPreview.styles.scenariosWrapper}>
              {scenarios.map(scenario => (
                <View
                  key={scenario}
                  style={MatchPreview.styles.scenarioWrapper}
                >
                  <Icon name="layers" color="#ECEFF1" />
                  <AppText style={MatchPreview.styles.scenario}>
                    {scenario}
                  </AppText>
                </View>
              ))}
            </View>
            {expandable ? (
              <TouchableHighlight
                onPress={this._toggleExpand}
                underlayColor={underlay}
                style={MatchPreview.styles.expanderButton}
              >
                <View style={[MatchPreview.styles.expander, border]}>
                  <Icon
                    name={this.state.expanded ? 'expand-less' : 'expand-more'}
                    color="#ECEFF1"
                  />
                  {this.state.expanded ? null : (
                    <AppText>
                      +{this.props.match.scenarios.length - scenarios.length}{' '}
                      more
                    </AppText>
                  )}
                </View>
              </TouchableHighlight>
            ) : null}
          </View>
        </View>
        <View
          style={[
            MatchPreview.styles.card,
            border,
            MatchPreview.styles.details,
          ]}
        >
          <AppText>DETAILS</AppText>
        </View>
      </ScrollView>
    );
  }
}
