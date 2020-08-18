mongoose.connect('mongodb://localhost:27017/kora', { useNewUrlParser: true }).
  catch(error => handleError(error));

try {
  await mongoose.connect(mongoConnectionStr, { useNewUrlParser: true });
} catch (error) {
  handleError(error);
}