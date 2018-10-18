import React, { Component } from 'react';
import {
    withStyles, Grid, Typography, Paper, Card, CardContent, CardActions, CardMedia, Button,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CourseSections extends Component {
    // state = {}
    render() {
        const { sids, sections } = this.props;
        let section_list;
        section_list = sids.map((sid) => {
            if (sections[sid] !== undefined) {
                return (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{sections[sid].title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {sections[sid].description}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            } else return null;
        });
        return (
            <div>
                {section_list}
            </div>

        );
    }
}

export default CourseSections;