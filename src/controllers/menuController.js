const Menu = require("../models/menuModel");
// Wrapper untuk mengubah Promise menjadi callback style
function withCallback(promise, callback) {
  promise
    .then(data => callback(null, data))
    .catch(err => callback(err));
}
// Fungsi untuk membuat menu item
const createMenuItem = (req, res) => {
  const newMenuItem = new Menu(req.body);

  withCallback(newMenuItem.save(), (err, savedItem) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(savedItem);
  });
};
// Fungsi untuk mengambil semua menu item
const getAllMenuItems = (req, res) => {
  withCallback(Menu.find({}), (err, items) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(items);
  });
};
const getMenuByCategory = (req, res) => {
  // const category = ____________; // TODO: Ambil kategori dari parameter URL

  // withCallback(Menu.find({ ___________ }), (err, items) => { // TODO: Lengkapi query untuk mencari berdasarkan kategori
  //   if (err) return res.status(500).json({ error: ___________ }); // TODO: Kirimkan pesan error jika terjadi kesalahan

  //   if (__________) // TODO: Periksa apakah menu ditemukan
  //     return res.status(404).json({ error: `Menu with category '${category}' not found` });

  //   res.json(__________); // TODO: Kirimkan hasil query dalam response
  // });
  const category = req.params.category;

  withCallback(Menu.find({ category }), (err, items) => {
    if (err) return res.status(500).json({ error: err.message });
    if (items.length === 0) return res.status(404).json({ error: `Menu with category '${category}' not found` });

    res.json(items);
  });
};

// Ekspor fungsi-fungsi sebagai objek
module.exports = {
  getAllMenuItems,
  createMenuItem,
  getMenuByCategory,
};
