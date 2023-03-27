import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Cards() {
  return (
    <>
      <Box />
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Stack spacing={2} direction="row">
                <Card
                  style={{ borderRadius: "8px",boxShadow:'0px 2px 6px #7070701A',border:'1px solid #E4E4E4' }}
                  sx={{ maxWidth: 44 + "%", height: 215 }}
                >
                  <CardContent style={{ fontSize: "12px" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      word of the day
                      <AutorenewIcon
                        style={{ marginLeft: "70px", fontSize: "22px" }}
                      />
                    </Typography>
                    <Typography>be-nev-o-lent</Typography>
                    <Typography variant="body2" color="text.secondary">
                      adjectvie
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta enim dolores virat kohli.
                    </Typography>
                    <VolumeUpIcon
                      style={{
                        width: "15%",
                        height: "22px",
                        fontSize: "15px",
                        marginBottom: "-20px",
                        backgroundColor: "#a638e0",
                        color: "white",
                        borderRadius: "6px",
                      }}
                    />
                  </CardContent>
                </Card>
                <Card
                  style={{ borderRadius: "10px",boxShadow:'0px 2px 6px #7070701A',border:'1px solid #E4E4E4' }}
                  sx={{ maxWidth: 90 + "%", height: 230 }}
                >
                  <CardContent>
                    <List style={{ alignItems: "center" }}>
                      <ListItem>
                        <Typography
                          style={{ fontSize: "18px" }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          <span>Our office</span>
                        </Typography>
                      </ListItem>
                      <Typography variant="body2" color="text.secondary">
                        
                       <span style={{fontSize:'12px'}}><PlaceIcon /> 688, Hi-Tech city, mindspace, Hyderabad</span>
                      </Typography>
                      <Divider />
                      <ListItem>
                        <Typography variant="body2" color="text.secondary">
                          <PhoneIcon /> +01-992856-8535
                        </Typography>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <Typography variant="body2" color="text.secondary">
                          <MailOutlineIcon /> balu@gmail.com
                        </Typography>
                      </ListItem>
                      <div style={{ gap: "10px" ,marginTop:'10px'}} className="mediaicons">
                        <IconButton>
                          <TwitterIcon
                            style={{
                              backgroundColor: "rgb(29, 155, 240)",
                              color: "white",
                              borderRadius: "12px",
                              fontSize: "15px",
                              padding: "6px",
                              boxShadow: "0px 0px 10px -5px",
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <FacebookIcon
                            style={{
                              padding: "6px",
                              backgroundColor: "#3244a8",
                              borderRadius: "12px",
                              fontSize: "15px",
                              color: "white",
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <InstagramIcon
                            style={{
                              backgroundColor: "red",
                              borderRadius: "12px",
                              fontSize: "15px",
                              padding: "6px",
                              color: "white",
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <LinkedInIcon
                            style={{
                              backgroundColor: "rgb(29, 155, 240)",
                              color: "white",
                              borderRadius: "12px",
                              fontSize: "15px",
                              padding: "6px",
                            }}
                          />
                        </IconButton>
                      </div>
                    </List>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={2}>
                <Card style={{ borderRadius: "6px",boxShadow:'0px 2px 6px #7070701A',border:'1px solid #E4E4E4' }} sx={{ height: 260 }}>
                  <CardMedia
                    component="img"
                    height="210"
                    image="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Paella dish"
                  />
                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Avatar
                      alt="Travis Howard"
                      style={{ marginTop: "-30PX" }}
                      src="https://wallpaperaccess.com/full/1311175.jpg"
                    />
                    <IconButton style={{ color: "#a638e0" }} aria-label="share">
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton style={{ color: "#a638e0" }} aria-label="share">
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton style={{ color: "#a638e0" }} aria-label="share">
                      <InsertLinkIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={25} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card style={{boxShadow:'0px 2px 6px #7070701A',border:'1px solid #E4E4E4'}} sx={{ height: 63 + "vh" }}>
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                    variant="h6"
                  >
                    Popular products
                    <span style={{ float: "right" }}>
                      <MoreHorizIcon />
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontSize: "14px", fontWeight: "500" }}
                  >
                    Checkout what other are liking the most
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item sx={12}>
                      <Stack spacing={4}>
                        <div style={{ display: "flex" }}>
                          <Card>
                            <CardMedia
                              component="img"
                              image="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="Paella dish"
                              style={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </Card>
                          <div style={{ padding: "10px" }}>
                            <Typography
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              The future of LED bulds
                            </Typography>
                            <Typography
                              style={{ fontSize: "13px" }}
                              variant="body2"
                              color="text.secondary"
                            >
                              Lorem ipsum is simple ramdom text
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <span style={{ textDecoration: "line-through" }}>
                                $250
                              </span>{" "}
                              $200
                            </Typography>
                          </div>
                          <Card>
                            <CardMedia
                              component="img"
                              image="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="Paella dish"
                              style={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </Card>
                          <div style={{ padding: "10px" }}>
                            <Typography
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              The fitness watch
                            </Typography>
                            <Typography
                              style={{ fontSize: "13px" }}
                              variant="body2"
                              color="text.secondary"
                            >
                              Lorem ipsum is simple ramdom text
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <span style={{ textDecoration: "line-through" }}>
                                $299
                              </span>{" "}
                              $275
                            </Typography>
                          </div>
                        </div>
                        {/* close */}
                        <div style={{ display: "flex" }}>
                          <Card>
                            <CardMedia
                              component="img"
                              image="https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="Paella dish"
                              style={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </Card>
                          <div style={{ padding: "10px" }}>
                            <Typography
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              Speakers-party time
                            </Typography>
                            <Typography
                              style={{ fontSize: "13px" }}
                              variant="body2"
                              color="text.secondary"
                            >
                              Lorem ipsum is simple ramdom texts
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <span style={{ textDecoration: "line-through" }}>
                                $980
                              </span>{" "}
                              $499
                            </Typography>
                          </div>
                          <Card>
                            <CardMedia
                              component="img"
                              image="https://images.pexels.com/photos/50583/light-lamp-bedside-lamp-illumination-50583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt="Paella dish"
                              style={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </Card>
                          <div style={{ padding: "10px" }}>
                            <Typography
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              Study lamp
                            </Typography>
                            <Typography
                              style={{ fontSize: "13px" }}
                              variant="body2"
                              color="text.secondary"
                            >
                              Lorem ipsum is simple ramdom text
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <span style={{ textDecoration: "line-through" }}>
                                $500
                              </span>{" "}
                              $430
                            </Typography>
                          </div>
                        </div>
                      </Stack>
                      <Button style={{marginTop:'10px',fontSize:'13px',fontStyle:'italic'}}>View All</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{boxShadow:'0px 2px 6px #7070701A',border:'1px solid #E4E4E4'}} sx={{ height: 63 + "vh" }}>
                <CardContent>
                  <Typography style={{ fontSize: "15px" }}>
                    Projects and teams
                  </Typography>
                  &nbsp; <br />
                  <Button
                    style={{
                      fontSize: "8px",
                      borderRadius: "10px",
                      padding: "2px 8px ",
                      backgroundColor: "#a638e0",
                      color: "white",
                    }}
                  >
                    Development
                  </Button>
                  &nbsp;
                  <Typography style={{ padding: "4px", fontSize: "12px" }}>
                    New UI design for project jumbo.
                  </Typography>
                  <Typography
                    style={{ padding: "4px", fontSize: "14px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    70% Completed
                  </Typography>
                  <LinearProgress
                    style={{
                      padding: "1px 2px",
                      color: "#33eb91",
                      borderRadius: "6px",
                    }}
                    variant="determinate"
                    value={70}
                  />
                  &nbsp;
                  <AvatarGroup style={{ width: "44%", height: "100%" }} max={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://wallpaperaccess.com/full/1311175.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/cj1wxfcvuulvisvj_1648642140.jpeg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://images.news18.com/ibnlive/uploads/2021/09/dhoni-kohli-16325510093x2.jpg?impolicy=website&width=510&height=356"
                    />
                    <Avatar alt="Agnes Walker" src="https://bit.ly/3K9WQan" />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://bit.ly/3K9WQan"
                    />
                    <Avatar alt="Agnes Walker" src="https://bit.ly/3K9WQan" />
                  </AvatarGroup>
                  <Button  style={{
                      fontSize: "8px",
                      borderRadius: "10px",
                      padding: "1.5px 9px ",
                      backgroundColor: "green",
                      color: "white",
                      marginTop: "10px",
                    }}>
                    Designing
                  </Button>
                  <Typography style={{ padding: "3px", fontSize: "12px" }}>
                    Promo graphics design wieldy
                  </Typography>
                  <Typography
                    style={{ padding: "3px", fontSize: "14px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    60% Completed
                  </Typography>
                  <LinearProgress
                    style={{ padding: "1px 2px", borderRadius: "6px" }}
                    variant="determinate"
                    value={60}
                  />
                  &nbsp;
                  <AvatarGroup style={{ width: "44%", height: "100%" }} max={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://wallpaperaccess.com/full/1311175.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/cj1wxfcvuulvisvj_1648642140.jpeg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://images.news18.com/ibnlive/uploads/2021/09/dhoni-kohli-16325510093x2.jpg?impolicy=website&width=510&height=356"
                    />
                    <Avatar alt="Agnes Walker" src="https://bit.ly/3K9WQan" />
                    <Avatar
                      alt="Trevor Henderson"
                      src="https://bit.ly/3K9WQan"
                    />
                    <Avatar alt="Agnes Walker" src="https://bit.ly/3K9WQan" />
                  </AvatarGroup>
                  <Button
                    style={{
                      fontSize: "8px",
                      borderRadius: "10px",
                      padding: "1.5px 8px ",
                      backgroundColor: "red",
                      color: "white",
                      marginTop: "10px",
                    }}
                  >
                    Marketing
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Cards;
