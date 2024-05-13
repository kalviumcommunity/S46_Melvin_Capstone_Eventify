import Joi from "joi";

export const chatSchema = Joi.object({
  members: Joi.array().items(Joi.string().required()).required(),
}); 

export const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  organizerId: Joi.string().required(),
  registeredUsers: Joi.array().items(Joi.string()),
  image: Joi.string().required(),
  website: Joi.string().allow(""),
  socialMediaLinks: Joi.array().items(Joi.string()),
});

export const messageSchema = Joi.object({
  chatId: Joi.string().required(),
  senderId: Joi.string().required(),
  text: Joi.string().required(),
});

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  interests: Joi.array().items(Joi.string()),
  registeredEvents: Joi.array().items(Joi.string()),
  bookmarks: Joi.array().items(Joi.string()),
});

export const organizerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  college: Joi.string().required(),
  events: Joi.array().items(Joi.string()),
});
