
import SwiftUI

struct GeometryReaderExamplesView: View {
    var body: some View {
        List {
            GeometryReader {
                geometry in
                VStack {
                    Text("Width: \(geometry.size.width, specifier: "%.2f")")
                    Text("Height: \(geometry.size.height, specifier: "%.2f")")
                }
                .frame(width: geometry.size.width * 0.8, height: geometry.size.height * 0.5)
                .background(Color.blue)
                .foregroundColor(.white)
                .position(x: geometry.size.width / 2, y: geometry.size.height / 2)
            }
            .frame(height: 200)
            .border(Color.red)
            .navigationTitle("GeometryReader Example")
        }
        .navigationTitle("GeometryReader Examples")
    }
}

struct GeometryReaderExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReaderExamplesView()
    }
}
